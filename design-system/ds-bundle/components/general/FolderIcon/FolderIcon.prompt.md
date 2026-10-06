FolderIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.FolderIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface FolderIconProps {
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
    <FolderIcon size={16} />
    <FolderIcon size={24} />
    <FolderIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <FolderIcon size={28} color="var(--c-ink)" />
    <FolderIcon size={28} color="var(--c-teal)" />
    <FolderIcon size={28} color="var(--c-danger)" />
  </div>
)
```
