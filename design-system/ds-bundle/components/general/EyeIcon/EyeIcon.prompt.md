EyeIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.EyeIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface EyeIconProps {
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
    <EyeIcon size={16} />
    <EyeIcon size={24} />
    <EyeIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <EyeIcon size={28} color="var(--c-ink)" />
    <EyeIcon size={28} color="var(--c-teal)" />
    <EyeIcon size={28} color="var(--c-danger)" />
  </div>
)
```
