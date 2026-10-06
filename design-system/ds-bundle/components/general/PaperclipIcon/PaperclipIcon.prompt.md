PaperclipIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.PaperclipIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PaperclipIconProps {
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
    <PaperclipIcon size={16} />
    <PaperclipIcon size={24} />
    <PaperclipIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <PaperclipIcon size={28} color="var(--c-ink)" />
    <PaperclipIcon size={28} color="var(--c-teal)" />
    <PaperclipIcon size={28} color="var(--c-danger)" />
  </div>
)
```
