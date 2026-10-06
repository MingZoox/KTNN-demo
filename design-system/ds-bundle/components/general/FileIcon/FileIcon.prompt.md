FileIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.FileIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface FileIconProps {
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
    <FileIcon size={16} />
    <FileIcon size={24} />
    <FileIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <FileIcon size={28} color="var(--c-ink)" />
    <FileIcon size={28} color="var(--c-teal)" />
    <FileIcon size={28} color="var(--c-danger)" />
  </div>
)
```
