PathIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.PathIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface PathIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
  d: string;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'center', color: 'var(--c-blue-deep)' }}>
    <PathIcon d="M3 12l9-9 9 9M5 10v10h14V10" size={24} />
    <PathIcon d="M12 5v14M5 12h14" size={36} color="var(--c-teal)" />
  </div>
)
```
