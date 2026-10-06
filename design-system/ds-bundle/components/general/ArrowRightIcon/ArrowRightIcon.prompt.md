ArrowRightIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.ArrowRightIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ArrowRightIconProps {
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
    <ArrowRightIcon size={16} />
    <ArrowRightIcon size={24} />
    <ArrowRightIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <ArrowRightIcon size={28} color="var(--c-ink)" />
    <ArrowRightIcon size={28} color="var(--c-teal)" />
    <ArrowRightIcon size={28} color="var(--c-danger)" />
  </div>
)
```
