CloseIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.CloseIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CloseIconProps {
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
    <CloseIcon size={16} />
    <CloseIcon size={24} />
    <CloseIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <CloseIcon size={28} color="var(--c-ink)" />
    <CloseIcon size={28} color="var(--c-teal)" />
    <CloseIcon size={28} color="var(--c-danger)" />
  </div>
)
```
