UsersIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.UsersIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface UsersIconProps {
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
    <UsersIcon size={16} />
    <UsersIcon size={24} />
    <UsersIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <UsersIcon size={28} color="var(--c-ink)" />
    <UsersIcon size={28} color="var(--c-teal)" />
    <UsersIcon size={28} color="var(--c-danger)" />
  </div>
)
```
