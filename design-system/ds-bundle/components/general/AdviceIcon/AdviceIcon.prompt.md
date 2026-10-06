AdviceIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.AdviceIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AdviceIconProps {
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
    <AdviceIcon size={16} />
    <AdviceIcon size={24} />
    <AdviceIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <AdviceIcon size={28} color="var(--c-ink)" />
    <AdviceIcon size={28} color="var(--c-teal)" />
    <AdviceIcon size={28} color="var(--c-danger)" />
  </div>
)
```
