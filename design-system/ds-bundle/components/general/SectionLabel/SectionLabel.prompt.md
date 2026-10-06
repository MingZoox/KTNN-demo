SectionLabel from vanban-dieuhanh-ui. Use via `window.VanbanUI.SectionLabel` (bundle loaded from the root `_ds_bundle.js`).

Nhãn overline in hoa, giãn chữ — BẢN TÓM TẮT, ĐIỀU KHOẢN ĐƯỢC DẪN, TỆP ĐÍNH KÈM…

## Props

```ts
interface SectionLabelProps {
  children: string;
  tight?: boolean;
}
```

## Examples

### Labels

```jsx
() => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <SectionLabel>Bản tóm tắt</SectionLabel>
    <SectionLabel>Điều khoản được dẫn</SectionLabel>
    <SectionLabel>Tệp đính kèm</SectionLabel>
  </div>
)
```

### Tight

```jsx
() => (
  <div>
    <SectionLabel tight>Tệp đính kèm</SectionLabel>
    <p style={{ margin: 0, fontSize: 14 }}>3 tệp · PDF, XLSX</p>
  </div>
)
```
