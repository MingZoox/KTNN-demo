RoleBadge from vanban-dieuhanh-ui. Use via `window.VanbanUI.RoleBadge` (bundle loaded from the root `_ds_bundle.js`).

Vai của tôi với một văn bản: vòng tròn icon + tên vai.

## Props

```ts
interface RoleBadgeProps {
  role: "chu_tri" | "phoi_hop" | "de_biet";
  /** `icon` = chỉ vòng tròn icon, dùng chỗ chật. Mặc định có cả chữ. */
  variant?: "full" | "icon";
}
```

## Examples

### Full

```jsx
() => (
  <div style={row}>
    <RoleBadge role="chu_tri" />
    <RoleBadge role="phoi_hop" />
    <RoleBadge role="de_biet" />
  </div>
)
```

### IconOnly

```jsx
() => (
  <div style={row}>
    <RoleBadge role="chu_tri" variant="icon" />
    <RoleBadge role="phoi_hop" variant="icon" />
    <RoleBadge role="de_biet" variant="icon" />
  </div>
)
```
