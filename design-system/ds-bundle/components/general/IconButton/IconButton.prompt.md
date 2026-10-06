IconButton from vanban-dieuhanh-ui. Use via `window.VanbanUI.IconButton` (bundle loaded from the root `_ds_bundle.js`).

Nút chỉ có icon; `label` bắt buộc để đọc được bằng trình đọc màn hình.

## Props

```ts
interface IconButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "tint" | "solid" | "ghost";
  label: string;
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
    <IconButton variant="outline" label="Sao chép"><CopyIcon size={16} /></IconButton>
    <IconButton variant="tint" label="Nhắc việc"><BellIcon size={16} /></IconButton>
    <IconButton variant="solid" label="Tạo lại"><RefreshIcon size={16} /></IconButton>
    <IconButton variant="ghost" label="Xoá"><TrashIcon size={16} /></IconButton>
  </div>
)
```
