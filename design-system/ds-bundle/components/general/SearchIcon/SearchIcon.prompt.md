SearchIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.SearchIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface SearchIconProps {
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
    <SearchIcon size={16} />
    <SearchIcon size={24} />
    <SearchIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <SearchIcon size={28} color="var(--c-ink)" />
    <SearchIcon size={28} color="var(--c-teal)" />
    <SearchIcon size={28} color="var(--c-danger)" />
  </div>
)
```
