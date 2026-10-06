# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Scope of this directory

This is the standalone `ai-chatbot-demo` repository at `/Users/nguyenvanminhvu/Documents/Common/ai-chatbot-demo`, not part of the Tatca product. All assistant work was migrated from the former `TatcaAI/tatca/ai-chatbot-demo copy` directory on 2026-10-05. Continue editing here; the old copy is only a reference. Use `make`, `npm` and the venv below. The migration branch is `feat/audit-assistant-workspace`.

It is a Vietnamese document-flow ("Văn bản điều hành") app for the State Audit Office (KTNN) with an AI assistant:

- **Backend** (`backend/`) — FastAPI that summarizes legal documents and drafts action advice ("tham mưu") with a **local Qwen3 model served by MLX** (Apple GPU, no external API). Also handles incoming documents, forwarding, reminders, and Kafka events.
- **Frontend** (`frontend/`) — React 18 + Vite + TypeScript, plain CSS modules (no UI framework), hash routing. Two modes: backend mode (default) and a **standalone demo mode** with no backend, deployed on Vercel.

All UI text, most code comments, `README.md` and `plans/` are in Vietnamese. Keep new user-facing strings Vietnamese.

## Commands

Run from this directory. First time: `make setup` → `make model` (terminal 1, leave running) → `make dev` (terminal 2).

```bash
make setup            # build backend/.venv, install backend+frontend deps, create backend/.env
make model            # download/convert model per MODEL in .env, then serve mlx_lm on :8080
make dev              # backend :8000 (--reload) + frontend :5173 (vite proxies /api → :8000)
make be / make fe     # one side only
make stores           # Mongo (:27017) + Redis (:6379) in Docker; `make mongo` / `make redis` individually
make deps             # pyproject changed → reinstall backend deps into the existing venv
make cronjob          # reminder scan loop (separate process); --once / --dry-run via cronjob-once / cronjob-check
make pm2              # whole stack from app.json (mongo, model, api, web, cronjob); pm2-logs / pm2-stop
make test             # pytest (backend) + vitest (frontend)
make lint             # ruff check (backend) + tsc -b (frontend)
```

Single tests:

```bash
cd backend  && .venv/bin/python -m pytest tests/test_advice.py -q            # one file
cd backend  && .venv/bin/python -m pytest tests/test_api.py -k name -q       # one test
cd frontend && npx vitest run src/lib/some-file.test.ts                      # one frontend file
cd frontend && npm run typecheck                                              # tsc -b
```

Frontend-only (no backend, Mongo, Redis, Kafka, or model):

```bash
cd frontend
npm run dev:demo -- --port 5174     # demo mode; accounts viewer / office, password 1
npm run build:demo                  # what Vercel runs (frontend/vercel.json)
npm run check:attachments           # documents.ts attachments vs public/data_sources (npm run sync:attachments writes)
```

Other `make` targets (`summaries`, `extract`, `advise`, `bench`, `summaries-test`, `delete-model`) are batch scripts needing the model server and Mongo running. `make help` lists them.

## Backend architecture (`backend/src/`)

Layers: `api/` (routes, schemas, deps) → `services/` (logic + stores) → `llm/client.py` (OpenAI-compatible client to the model server) with `core/` for config, prompts, model catalog.

- **Two processes talk to the model.** `scripts/model_server.py` wraps `mlx_lm.server` on :8080 (started by `scripts/serve.sh`); the FastAPI app calls it at `LLM_BASE_URL`. All inference funnels through `services/concurrency.py`, a process-wide gate sized by `MAP_CONCURRENCY`.
- **Long documents are map-reduce.** `services/chunking.py` splits by Chương/Mục/Điều, `summarizer.py` maps then merges in rounds, `advice.py` (the largest file) runs the three-step "tham mưu" flow. `CHUNK_TOKENS`, `MAX_CHUNKS` and `QUANT_BITS` are constrained by **Metal memory, not context window**. Read README → "Bộ nhớ — chỗ chết người" and "Trần token sinh" before changing them; each step has its own token cap in code, and `MAX_NEW_TOKENS` can only tighten it.
- **Four memory layers, none with an on/off switch.** Redis `cache` (per-chunk, short TTL, falls back to in-process memory) plus Mongo stores `summary_store`, `extract_store`, `advise_store` (keyed by prompt fingerprint, so editing a prompt invalidates old entries — see `services/fingerprint.py`). Without Mongo the app still runs but every document re-calls the model, reported via `ERROR` log, `/api/health` and a UI banner. `incoming_summaries` is the exception: an overwrite-in-place lookup table (`so_den + filename`), not a fingerprint cache; use `INCOMING_SUMMARIES_COLLECTION` / `make summaries-test` to trial prompts without touching the live table.
- **Thinking is disabled per request** (`chat_template_kwargs: {"enable_thinking": false}` in `llm/client.py`). `summarizer` still strips inline `<think>` as a safety net.
- **Incoming documents** (`POST /api/documents`, forward): files are saved under `frontend/public/data_sources/`, text extraction + OCR (Tesseract `vie`) runs off the response path, a Kafka REST event is fired (empty `KAFKA_REST_URL` = log only), and the summarize + advise streams run in the background. The frontend polls every 5 s while AI work is pending.
- **Reminders** are stored in Mongo by the API, but fired by a **separate process** (`scripts/reminder_worker.py`, `make cronjob`), deliberately not in the API because `uvicorn --reload` would interrupt a scan mid-fire. If the cronjob isn't running, nothing fires and nothing errors. Scan → schedule → claim (`sending`) → fire → advance; see README → "Nhắc việc".
- **Auth is an identity switcher, not security** (`core/user_login.py`): every password is `1`, the API checks nothing. Don't build on it as if it were access control.

`backend/tests/conftest.py` forces a deterministic settings baseline (ignores `.env`) and redirects `DATA_SOURCES_DIR` to `tmp_path`. `test_api.py`'s `make_client` patches the store builders so tests never hit real Mongo/Redis. Keep both isolations when adding tests. Ruff: line length 100, rules `E F I UP B RUF`.

## Frontend architecture (`frontend/src/`)

- `App.tsx` → `useSession` gate (login page until an account exists) → `components/layout/authenticated-workspace` which hosts the pages (`InboxPage`, `AuditChatPage`, and the older `AssistantPage`) selected by `useHashRoute`. The assistant is both a floating **bubble** (popup on desktop, fullscreen under 640px) and an **expanded page** at `#/tro-ly-kiem-toan`; they share state through `components/assistant-workspace/`, `components/audit-chat/` and the `lib/use-assistant-*` / `lib/assistant-*` modules.
- **Demo mode** is a build-time flag (`lib/demo-mode.ts`: Vite `--mode demo` or `VITE_DEMO_MODE=true`). `lib/api.ts` routes every call to `lib/demo-api.ts` (canned data in `demo-api-data.ts`, persisted in `localStorage` under `vbdh.ui-demo.*`) **before** `fetch`. It never falls through to the network and never falls back to demo when the real API fails. Default `npm run dev` / `build` still talk to the backend. Don't add a visible "demo" badge to the UI.
- API responses pass through runtime contracts (`lib/api-response-contract.ts`); a new endpoint needs its shape added there and a demo handler if demo mode should support it.
- Sample data lives in `src/data/` (`documents.ts`, `people.ts`, …); attachments there must match `public/data_sources/<số đến>/` on disk (NFC/NFD filename trap on macOS, hence `sync:attachments`).
- Tests are **co-located** (`*.test.ts[x]`, vitest); backend tests live in `backend/tests/`.

Two traps documented in the README that recur: (1) `useEffect` that resets user state must depend on identifiers (`id`, `code`), not objects, because polled lists rebuild identities every 5 s; (2) the Inbox keeps parallel arrays (`docs`, `notes`, `roles`, `focal`) indexed by position, so filter them in the same pass or hover cards show the wrong person's role.

## Conventions and docs

- `README.md` (~2,000 lines) is the real design document — decisions, measured numbers and past bugs by topic. Check the relevant section before changing memory, token, queue, store or reminder behavior.
- Work is planned in `plans/<YYMMDD>-<slug>/plan.md`, with audits and reviews in `plans/reports/`. Follow that layout when asked to plan.
- Comments in this code explain *why* (the constraint or bug that forced the shape), often citing a measured number. Match that style rather than restating the code.
- `backend/.env` is created from `.env.example` and read once at startup; changing it needs a backend restart (and `make model` if `MODEL`/`QUANT_BITS` changed). Never put Kafka credentials in the committed `.env.example`.
- `docs/` holds `kafka-integration.md` (event contract with the notification app) and `kich-ban-demo.md` (demo script).
