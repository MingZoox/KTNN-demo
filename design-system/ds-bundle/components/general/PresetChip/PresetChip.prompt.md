PresetChip from vanban-dieuhanh-ui. Use via `window.VanbanUI.PresetChip` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PresetChipProps {
  children: string;
  size?: "sm" | "lg";
  onClick?: () => void;
}
```

## Examples

### Suggestions

```jsx
() => (
  <div style={row}>
    <PresetChip>Giao đơn vị chủ trì xử lý</PresetChip>
    <PresetChip>Cho ý kiến trước 15/10</PresetChip>
    <PresetChip>Lưu để biết</PresetChip>
  </div>
)
```

### Large

```jsx
() => (
  <div style={row}>
    <PresetChip size="lg">Đề nghị báo cáo kết quả</PresetChip>
    <PresetChip size="lg">Phối hợp thực hiện</PresetChip>
  </div>
)
```
