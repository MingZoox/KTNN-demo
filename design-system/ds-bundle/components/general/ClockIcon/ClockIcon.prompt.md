ClockIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.ClockIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ClockIconProps {
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
    <ClockIcon size={16} />
    <ClockIcon size={24} />
    <ClockIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <ClockIcon size={28} color="var(--c-ink)" />
    <ClockIcon size={28} color="var(--c-teal)" />
    <ClockIcon size={28} color="var(--c-danger)" />
  </div>
)
```
