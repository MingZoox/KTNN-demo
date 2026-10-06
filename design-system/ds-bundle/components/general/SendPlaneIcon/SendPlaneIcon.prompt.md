SendPlaneIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.SendPlaneIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SendPlaneIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
}
```

## Examples

### Sizes

```jsx
() => (
  <div style={row}>
    <SendPlaneIcon size={16} />
    <SendPlaneIcon size={24} />
    <SendPlaneIcon size={36} />
  </div>
);

// Icon này lấy màu từ `currentColor` (không có prop `color`) nên đổi màu bằng chữ của phần tử bọc.
```

### Colors

```jsx
() => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
    <span style={{ color: 'var(--c-ink)' }}><SendPlaneIcon size={28} /></span>
    <span style={{ color: 'var(--c-teal)' }}><SendPlaneIcon size={28} /></span>
    <span style={{ color: 'var(--c-danger)' }}><SendPlaneIcon size={28} /></span>
  </div>
)
```
