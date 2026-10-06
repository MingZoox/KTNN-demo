SegmentedControl from vanban-dieuhanh-ui. Use via `window.VanbanUI.SegmentedControl` (bundle loaded from the root `_ds_bundle.js`).

Nhóm nút chọn một trong nhiều — lọc hộp việc, độ dài tóm tắt, cách nhập văn bản.

## Props

```ts
interface SegmentedControlProps {
  items: readonly string[];
  value: number;
  onChange: (index: number) => void;
  /** "wide" dùng cho các nhóm nút trong khối nhập liệu (chữ 12px). */
  size?: "sm" | "wide";
  ariaLabel?: string;
}
```

## Examples

### Filter

```jsx
() => {
  const [v, setV] = useState(0);
  return <SegmentedControl items={['Tất cả', 'Chủ trì', 'Phối hợp', 'Để biết']} value={v} onChange={setV} ariaLabel="Lọc hộp việc" />;
}
```

### SummaryLength

```jsx
() => {
  const [v, setV] = useState(1);
  return <SegmentedControl items={['Ngắn', 'Vừa', 'Chi tiết']} value={v} onChange={setV} ariaLabel="Độ dài tóm tắt" />;
}
```

### Wide

```jsx
() => {
  const [v, setV] = useState(0);
  return <SegmentedControl size="wide" items={['Dán văn bản', 'Tải tệp lên']} value={v} onChange={setV} ariaLabel="Cách nhập" />;
}
```
