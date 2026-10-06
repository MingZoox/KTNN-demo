BellIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.BellIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface BellIconProps {
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
    <BellIcon size={16} />
    <BellIcon size={24} />
    <BellIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <BellIcon size={28} color="var(--c-ink)" />
    <BellIcon size={28} color="var(--c-teal)" />
    <BellIcon size={28} color="var(--c-danger)" />
  </div>
)
```
