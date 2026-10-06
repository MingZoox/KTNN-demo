NoteIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.NoteIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface NoteIconProps {
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
    <NoteIcon size={16} />
    <NoteIcon size={24} />
    <NoteIcon size={36} />
  </div>
)
```

### Colors

```jsx
() => (
  <div style={row}>
    <NoteIcon size={28} color="var(--c-ink)" />
    <NoteIcon size={28} color="var(--c-teal)" />
    <NoteIcon size={28} color="var(--c-danger)" />
  </div>
)
```
