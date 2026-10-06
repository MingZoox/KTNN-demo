DownloadIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.DownloadIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface DownloadIconProps {
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
    <DownloadIcon size={16} />
    <DownloadIcon size={24} />
    <DownloadIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <DownloadIcon size={28} color="var(--c-ink)" />
    <DownloadIcon size={28} color="var(--c-teal)" />
    <DownloadIcon size={28} color="var(--c-danger)" />
  </div>
)
```
