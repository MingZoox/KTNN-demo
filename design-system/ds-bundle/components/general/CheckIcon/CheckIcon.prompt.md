CheckIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.CheckIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface CheckIconProps {
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
    <CheckIcon size={16} />
    <CheckIcon size={24} />
    <CheckIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <CheckIcon size={28} color="var(--c-ink)" />
    <CheckIcon size={28} color="var(--c-teal)" />
    <CheckIcon size={28} color="var(--c-danger)" />
  </div>
)
```
