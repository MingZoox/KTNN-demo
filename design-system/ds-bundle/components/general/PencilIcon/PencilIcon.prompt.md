PencilIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.PencilIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PencilIconProps {
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
    <PencilIcon size={16} />
    <PencilIcon size={24} />
    <PencilIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <PencilIcon size={28} color="var(--c-ink)" />
    <PencilIcon size={28} color="var(--c-teal)" />
    <PencilIcon size={28} color="var(--c-danger)" />
  </div>
)
```
