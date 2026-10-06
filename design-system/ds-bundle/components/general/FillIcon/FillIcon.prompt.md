FillIcon from vanban-dieuhanh-ui. Use via `window.VanbanUI.FillIcon` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface FillIconProps {
  d: string;
  size?: number;
  className?: string;
}
```

## Examples

### Default

```jsx
() => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'center', color: 'var(--c-ink)' }}>
    <FillIcon d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" size={24} />
    <FillIcon d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" size={40} />
  </div>
)
```
