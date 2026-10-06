# Conventions — Văn bản điều hành UI (KTNN)

Vietnamese document-flow app for the State Audit Office. **All user-facing strings are Vietnamese** (e.g. "Chuyển xử lý", "Bản tóm tắt"). Use the real components below; never restyle them.

## Setup
- No provider or theme wrapper. Components read CSS custom properties from `:root`, which `styles.css` already defines (it imports `_ds_bundle.css`, which holds the `:root` tokens and component CSS). Always load `styles.css`; without it components render unstyled.
- Body font is `Inter` (loaded by `styles.css` from Google Fonts), exposed as `var(--font-sans)`.
- Components are exported on `window.VanbanUI` (`const { Button, Card } = window.VanbanUI`).

## Styling idiom: tokens, not classes
Component CSS is CSS-modules (hashed class names) — there are **no utility classes to use**. For your own layout glue use inline `style` with `var(--*)` tokens:
- Colour: `--c-blue`, `--c-blue-deep`, `--c-teal`, `--c-ink`, `--c-success|warning|danger` (+ `-bg`, `-ink`), `--n-0 … --n-950` (neutrals)
- Text: `--text-primary|secondary|muted|disabled|inverse|link`
- Surface/border: `--surface-page|card|sunken|hover|selected`, `--border-subtle|default|strong|focus`
- Space/shape: `--space-1…6,8`, `--radius-xs|sm|md|lg|xl|pill`, `--shadow-xs|sm|md|lg`
- Type: `--font-sans`, `--font-mono`, `--fw-regular|medium|semibold|bold`, `--lh-tight|normal|relaxed`
- Gradients: `--grad-brand`, `--grad-brand-soft`

## Components
- Actions: `Button` (`variant` primary|secondary|brand|muted; `size` sm|md|lg|block), `IconButton` (`label` required for a11y).
- Status/labels: `Badge` (`tone`), `StatusChip` (`status` done|doing|todo), `RoleBadge` (`role` chu_tri|phoi_hop|de_biet), `FileBadge` (`ext` PDF|DOCX|XLSX), `PresetChip`, `RefChip`, `SectionLabel`, `PendingNote` (AI-working state).
- Layout/input: `Card` (`accent`, `title`, `count`, `actions`; **no body padding — pad your children, e.g. `padding: '0 14px 14px'`**), `SegmentedControl` (controlled: `value` index + `onChange`), `Toggle` (controlled), `DateTimePicker` (controlled, ISO local `YYYY-MM-DDTHH:mm`).
- Icons: 36 `*Icon` stroke icons (`size`, `strokeWidth`, `color`; inherit `currentColor`), plus `PathIcon`/`FillIcon`. `SendPlaneIcon`, `ChecksIcon`, `SingleCheckIcon` have no `color` prop — set `color` on a wrapping element.

## Where the truth lives
Read `styles.css` and `_ds_bundle.css` (where the `:root` tokens live) for token values, and each `components/general/<Name>/<Name>.d.ts` + `.prompt.md` for props and examples.

## Example
```jsx
const { Card, Badge, Button, RoleBadge, SparkleIcon } = window.VanbanUI;

<Card accent="var(--c-blue)" title="Bản tóm tắt" count={<Badge tone="info" size="sm">3</Badge>}
  actions={<Button size="sm" variant="secondary">Tạo lại</Button>}>
  <div style={{ padding: '0 14px 14px', display: 'grid', gap: 'var(--space-3)' }}>
    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Công văn đề nghị cung cấp số liệu các dự án khoa học công nghệ.</p>
    <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
      <RoleBadge role="chu_tri" />
      <Button variant="brand"><SparkleIcon size={14} /> Tạo tham mưu</Button>
    </div>
  </div>
</Card>
```

# VanbanUI (vanban-dieuhanh-ui@0.3.0)

This design system is the published vanban-dieuhanh-ui React library, bundled as a single
browser global. All 52 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.VanbanUI`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.VanbanUI.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AdviceIcon } = window.VanbanUI;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AdviceIcon />);
```

## Tokens

111 CSS custom properties from vanban-dieuhanh-ui. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (19): `--text-primary`, `--text-secondary`, `--text-muted`, …
- **spacing** (7): `--space-1`, `--space-2`, `--space-3`, …
- **typography** (2): `--font-sans`, `--font-mono`
- **radius** (6): `--radius-xs`, `--radius-sm`, `--radius-md`, …
- **shadow** (9): `--shadow-ktnn-action`, `--shadow-hairline`, `--shadow-xs`, …
- **other** (68): `--c-green`, `--c-mint`, `--c-teal`, …

## Components

### general
- `AdviceIcon`
- `ArrowRightIcon`
- `Badge` — Chip m / nhn trng thi dng vin thuc.
- `BellIcon`
- `Button` — primary  di xanh KTNN (hnh ng chnh)  brand  nn gradient nht (hnh ng AI)
- `Card` — Th ni dung nn trng, vin mnh, bng nhum navy.
- `CheckIcon`
- `ChecksIcon` — Double tick: the message was answered.
- `ChevronDownIcon`
- `ClockIcon`
- `CloseIcon`
- `CopyIcon`
- `DateTimePicker` — Popup edits a temporary draft. Only Apply changes the owning form's controlled value.
- `DownloadIcon`
- `ExternalLinkIcon`
- `EyeIcon`
- `FileBadge` — Nhn vung ghi phn m rng tp, mu theo loi tp.
- `FileIcon`
- `FileTextIcon`
- `FillIcon` — Icon t c (badge App Store / Google Play).
- `FlagIcon`
- `FolderIcon`
- `IconButton` — Nt ch c icon label bt buc  c c bng trnh c mn hnh.
- `InfoIcon`
- `MenuIcon`
- `MicIcon`
- `NoteIcon`
- `PaperclipIcon`
- `PathIcon` — Icon dng t d liu path (dng cho thanh iu hng ly path t file data).
- `PencilIcon`
- `PendingNote` — Khi ang ch AI: khung ring + vng quay.
- `PinIcon`
- `PlusIcon`
- `PresetChip` — Gi  bt ph bm c.
- `RefChip` — Nhn iu khon c dn (iu 4.2, Mc V, Bt ph).
- `RefreshIcon`
- `ReplyIcon`
- `RoleBadge` — Vai ca ti vi mt vn bn: vng trn icon + tn vai.
- `SearchIcon`
- `SectionLabel` — Nhn overline in hoa, gin ch  BN TM TT, IU KHON C DN, TP NH KM
- `SegmentedControl` — Nhm nt chn mt trong nhiu  lc hp vic,  di tm tt, cch nhp vn bn.
- `SendPlaneIcon` — Filled paper plane for the send button.
- `ShieldIcon`
- `SingleCheckIcon` — Single tick: the message was sent.
- `SparkleIcon`
- `StatusChip` — Trng thi x l ca mt ngi trong lung.
- `SummaryIcon`
- `Toggle` — Cng tc nh  dng cho Km iu khon trch dn.
- `TrashIcon`
- `UploadIcon`
- `UsersIcon`
- `WarningIcon`
