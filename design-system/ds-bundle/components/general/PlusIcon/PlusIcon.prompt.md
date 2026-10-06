PlusIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.PlusIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PlusIconProps {
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
    <PlusIcon size={16} />
    <PlusIcon size={24} />
    <PlusIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <PlusIcon size={28} color="var(--c-ink)" />
    <PlusIcon size={28} color="var(--c-teal)" />
    <PlusIcon size={28} color="var(--c-danger)" />
  </div>
)
```
