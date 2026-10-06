UploadIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.UploadIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface UploadIconProps {
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
    <UploadIcon size={16} />
    <UploadIcon size={24} />
    <UploadIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <UploadIcon size={28} color="var(--c-ink)" />
    <UploadIcon size={28} color="var(--c-teal)" />
    <UploadIcon size={28} color="var(--c-danger)" />
  </div>
)
```
