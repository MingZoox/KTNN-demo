FlagIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.FlagIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface FlagIconProps {
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
    <FlagIcon size={16} />
    <FlagIcon size={24} />
    <FlagIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <FlagIcon size={28} color="var(--c-ink)" />
    <FlagIcon size={28} color="var(--c-teal)" />
    <FlagIcon size={28} color="var(--c-danger)" />
  </div>
)
```
