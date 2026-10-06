RefChip from vanban-dieuhanh-ui. Use via `window.VanbanUI.RefChip` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface RefChipProps {
  children: string;
  size?: "sm" | "lg";
}
```

## Examples

### Citations

```jsx
() => (
  <div style={row}>
    <RefChip>Điều 4.2</RefChip>
    <RefChip>Mục V</RefChip>
    <RefChip>Bút phê</RefChip>
  </div>
)
```

### Large

```jsx
() => (
  <div style={row}>
    <RefChip size="lg">Chương II, Điều 12</RefChip>
    <RefChip size="lg">Khoản 3</RefChip>
  </div>
)
```
