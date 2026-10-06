FileTextIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.FileTextIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface FileTextIconProps {
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
    <FileTextIcon size={16} />
    <FileTextIcon size={24} />
    <FileTextIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <FileTextIcon size={28} color="var(--c-ink)" />
    <FileTextIcon size={28} color="var(--c-teal)" />
    <FileTextIcon size={28} color="var(--c-danger)" />
  </div>
)
```
