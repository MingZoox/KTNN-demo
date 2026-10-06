ChecksIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.ChecksIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ChecksIconProps {
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
    <ChecksIcon size={16} />
    <ChecksIcon size={24} />
    <ChecksIcon size={36} />
  </div>
);

// Icon này lấy màu từ `currentColor` (không có prop `color`) nên đổi màu bằng chữ của phần tử bọc.
```

### Colors

```jsx
() => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
    <span style={{ color: 'var(--c-ink)' }}><ChecksIcon size={28} /></span>
    <span style={{ color: 'var(--c-teal)' }}><ChecksIcon size={28} /></span>
    <span style={{ color: 'var(--c-danger)' }}><ChecksIcon size={28} /></span>
  </div>
)
```
