PinIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.PinIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PinIconProps {
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
    <PinIcon size={16} />
    <PinIcon size={24} />
    <PinIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <PinIcon size={28} color="var(--c-ink)" />
    <PinIcon size={28} color="var(--c-teal)" />
    <PinIcon size={28} color="var(--c-danger)" />
  </div>
)
```
