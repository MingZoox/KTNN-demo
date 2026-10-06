TrashIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.TrashIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface TrashIconProps {
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
    <TrashIcon size={16} />
    <TrashIcon size={24} />
    <TrashIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <TrashIcon size={28} color="var(--c-ink)" />
    <TrashIcon size={28} color="var(--c-teal)" />
    <TrashIcon size={28} color="var(--c-danger)" />
  </div>
)
```
