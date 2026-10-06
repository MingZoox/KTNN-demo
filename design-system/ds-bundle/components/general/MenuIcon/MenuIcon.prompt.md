MenuIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.MenuIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface MenuIconProps {
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
    <MenuIcon size={16} />
    <MenuIcon size={24} />
    <MenuIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <MenuIcon size={28} color="var(--c-ink)" />
    <MenuIcon size={28} color="var(--c-teal)" />
    <MenuIcon size={28} color="var(--c-danger)" />
  </div>
)
```
