Badge from vanban-dieuhanh-ui. Use via `window.VanbanUI.Badge` (bundle loaded from the root `_ds_bundle.js`).

Chip đếm / nhãn trạng thái dạng viên thuốc.

## Props

```ts
interface BadgeProps {
  children: React.ReactNode;
  tone?: "info" | "success" | "warning" | "danger" | "neutral" | "brand";
  size?: "md" | "sm";
}
```

## Examples

### Tones

```jsx
() => (
  <div style={row}>
    <Badge tone="info">Đang xử lý</Badge>
    <Badge tone="success">Hoàn thành</Badge>
    <Badge tone="warning">Sắp đến hạn</Badge>
    <Badge tone="danger">Quá hạn</Badge>
    <Badge tone="neutral">Lưu trữ</Badge>
    <Badge tone="brand">AI</Badge>
  </div>
)
```

### Small

```jsx
() => (
  <div style={row}>
    <Badge tone="info" size="sm">12</Badge>
    <Badge tone="danger" size="sm">3</Badge>
    <Badge tone="brand" size="sm">Mới</Badge>
  </div>
)
```
