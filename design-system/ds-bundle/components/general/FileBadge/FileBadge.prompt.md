FileBadge from vanban-dieuhanh-ui. Use via `window.VanbanUI.FileBadge` (bundle loaded from the root `_ds_bundle.js`).

Nhãn vuông ghi phần mở rộng tệp, màu theo loại tệp.

## Props

```ts
interface FileBadgeProps {
  ext: "PDF" | "DOCX" | "XLSX";
  size?: "md" | "sm";
}
```

## Examples

### Types

```jsx
() => (
  <div style={row}>
    <FileBadge ext="PDF" />
    <FileBadge ext="DOCX" />
    <FileBadge ext="XLSX" />
  </div>
)
```

### Small

```jsx
() => (
  <div style={row}>
    <FileBadge ext="PDF" size="sm" />
    <FileBadge ext="DOCX" size="sm" />
    <FileBadge ext="XLSX" size="sm" />
  </div>
)
```
