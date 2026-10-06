ReplyIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.ReplyIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ReplyIconProps {
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
    <ReplyIcon size={16} />
    <ReplyIcon size={24} />
    <ReplyIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <ReplyIcon size={28} color="var(--c-ink)" />
    <ReplyIcon size={28} color="var(--c-teal)" />
    <ReplyIcon size={28} color="var(--c-danger)" />
  </div>
)
```
