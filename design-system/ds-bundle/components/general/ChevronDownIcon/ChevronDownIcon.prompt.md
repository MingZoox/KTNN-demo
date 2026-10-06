ChevronDownIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.ChevronDownIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface ChevronDownIconProps {
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
    <ChevronDownIcon size={16} />
    <ChevronDownIcon size={24} />
    <ChevronDownIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <ChevronDownIcon size={28} color="var(--c-ink)" />
    <ChevronDownIcon size={28} color="var(--c-teal)" />
    <ChevronDownIcon size={28} color="var(--c-danger)" />
  </div>
)
```
