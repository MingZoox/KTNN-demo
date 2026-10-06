RefreshIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.RefreshIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface RefreshIconProps {
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
    <RefreshIcon size={16} />
    <RefreshIcon size={24} />
    <RefreshIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <RefreshIcon size={28} color="var(--c-ink)" />
    <RefreshIcon size={28} color="var(--c-teal)" />
    <RefreshIcon size={28} color="var(--c-danger)" />
  </div>
)
```
