SingleCheckIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.SingleCheckIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SingleCheckIconProps {
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
    <SingleCheckIcon size={16} />
    <SingleCheckIcon size={24} />
    <SingleCheckIcon size={36} />
  </div>
);

// Icon này lấy màu từ `currentColor` (không có prop `color`) nên đổi màu bằng chữ của phần tử bọc.
```

### Colors

```jsx
() => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
    <span style={{ color: 'var(--c-ink)' }}><SingleCheckIcon size={28} /></span>
    <span style={{ color: 'var(--c-teal)' }}><SingleCheckIcon size={28} /></span>
    <span style={{ color: 'var(--c-danger)' }}><SingleCheckIcon size={28} /></span>
  </div>
)
```
