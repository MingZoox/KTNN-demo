Button from vanban-dieuhanh-ui. Use via `window.VanbanUI.Button` (bundle loaded from the root `_ds_bundle.js`).

primary = dải xanh KTNN (hành động chính) · brand = nền gradient nhạt (hành động AI)
secondary = viền mảnh · muted = đang xử lý, không bấm được.

## Props

```ts
interface ButtonProps {
  children: React.ReactNode;
  variant?: "brand" | "primary" | "secondary" | "muted";
  size?: "md" | "sm" | "lg" | "block";
  className?: string;
  id?: string;
  style?: CSSProperties;
}
```

## Examples

### Variants

```jsx
() => (
  <div style={row}>
    <Button variant="primary">Chuyển xử lý</Button>
    <Button variant="secondary">Lưu nháp</Button>
    <Button variant="brand"><SparkleIcon size={14} /> Tạo tham mưu</Button>
    <Button variant="muted" disabled>Đang xử lý…</Button>
  </div>
)
```

### Sizes

```jsx
() => (
  <div style={row}>
    <Button size="sm">Nhỏ</Button>
    <Button size="md">Vừa</Button>
    <Button size="lg">Lớn</Button>
  </div>
)
```

### Block

```jsx
() => (
  <div style={{ width: 320 }}>
    <Button variant="primary" size="block"><CheckIcon size={14} /> Xác nhận hoàn thành</Button>
  </div>
)
```
