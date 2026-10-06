InfoIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.InfoIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface InfoIconProps {
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
    <InfoIcon size={16} />
    <InfoIcon size={24} />
    <InfoIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <InfoIcon size={28} color="var(--c-ink)" />
    <InfoIcon size={28} color="var(--c-teal)" />
    <InfoIcon size={28} color="var(--c-danger)" />
  </div>
)
```
