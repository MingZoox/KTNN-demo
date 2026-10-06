StatusChip from vanban-dieuhanh-ui. Use via `window.VanbanUI.StatusChip` (bundle loaded from the root `_ds_bundle.js`).

Trạng thái xử lý của một người trong luồng.

## Props

```ts
interface StatusChipProps {
  status: "done" | "doing" | "todo";
}
```

## Examples

### States

```jsx
() => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
    <StatusChip status="done" />
    <StatusChip status="doing" />
    <StatusChip status="todo" />
  </div>
)
```
