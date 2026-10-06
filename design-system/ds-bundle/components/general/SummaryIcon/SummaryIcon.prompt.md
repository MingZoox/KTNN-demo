SummaryIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.SummaryIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SummaryIconProps {
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
    <SummaryIcon size={16} />
    <SummaryIcon size={24} />
    <SummaryIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <SummaryIcon size={28} color="var(--c-ink)" />
    <SummaryIcon size={28} color="var(--c-teal)" />
    <SummaryIcon size={28} color="var(--c-danger)" />
  </div>
)
```
