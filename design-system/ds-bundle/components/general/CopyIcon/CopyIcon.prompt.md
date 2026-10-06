CopyIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.CopyIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CopyIconProps {
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
    <CopyIcon size={16} />
    <CopyIcon size={24} />
    <CopyIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <CopyIcon size={28} color="var(--c-ink)" />
    <CopyIcon size={28} color="var(--c-teal)" />
    <CopyIcon size={28} color="var(--c-danger)" />
  </div>
)
```
