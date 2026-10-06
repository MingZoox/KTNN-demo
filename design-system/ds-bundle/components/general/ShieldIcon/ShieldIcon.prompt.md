ShieldIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.ShieldIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ShieldIconProps {
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
    <ShieldIcon size={16} />
    <ShieldIcon size={24} />
    <ShieldIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <ShieldIcon size={28} color="var(--c-ink)" />
    <ShieldIcon size={28} color="var(--c-teal)" />
    <ShieldIcon size={28} color="var(--c-danger)" />
  </div>
)
```
