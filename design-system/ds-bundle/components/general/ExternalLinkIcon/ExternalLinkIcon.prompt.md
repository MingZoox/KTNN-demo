ExternalLinkIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.ExternalLinkIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ExternalLinkIconProps {
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
    <ExternalLinkIcon size={16} />
    <ExternalLinkIcon size={24} />
    <ExternalLinkIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <ExternalLinkIcon size={28} color="var(--c-ink)" />
    <ExternalLinkIcon size={28} color="var(--c-teal)" />
    <ExternalLinkIcon size={28} color="var(--c-danger)" />
  </div>
)
```
