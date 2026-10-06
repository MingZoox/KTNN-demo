MicIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.MicIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface MicIconProps {
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
    <MicIcon size={16} />
    <MicIcon size={24} />
    <MicIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <MicIcon size={28} color="var(--c-ink)" />
    <MicIcon size={28} color="var(--c-teal)" />
    <MicIcon size={28} color="var(--c-danger)" />
  </div>
)
```
