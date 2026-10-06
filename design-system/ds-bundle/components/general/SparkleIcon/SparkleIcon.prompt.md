SparkleIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.SparkleIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SparkleIconProps {
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
    <SparkleIcon size={16} />
    <SparkleIcon size={24} />
    <SparkleIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <SparkleIcon size={28} color="var(--c-ink)" />
    <SparkleIcon size={28} color="var(--c-teal)" />
    <SparkleIcon size={28} color="var(--c-danger)" />
  </div>
)
```
