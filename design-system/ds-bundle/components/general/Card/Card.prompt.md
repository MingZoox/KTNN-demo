Card from vanban-dieuhanh-ui. Use via `window.VanbanUI.Card` (bundle loaded from the root `_ds_bundle.js`).

Thẻ nội dung nền trắng, viền mảnh, bóng nhuốm navy.

## Props

```ts
interface CardProps {
  /** Màu vạch dọc trước tiêu đề (var(--c-blue), var(--c-teal)…). */
  accent?: string;
  title?: string;
  /** Chip đếm hiển thị ngay sau tiêu đề. */
  count?: React.ReactNode;
  /** Khu vực bên phải của header. */
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
```

## Examples

### WithHeader

```jsx
() => (
  <div style={{ width: 420 }}>
    <Card accent="var(--c-blue)" title="Bản tóm tắt" count={<Badge tone="info" size="sm">3</Badge>}>
      <p style={body}>
        Công văn đề nghị cung cấp thông tin, số liệu các dự án khoa học công nghệ phục vụ cuộc kiểm toán.
      </p>
    </Card>
  </div>
)
```

### WithActions

```jsx
() => (
  <div style={{ width: 420 }}>
    <Card
      accent="var(--c-teal)"
      title="Tham mưu xử lý"
      actions={<Button size="sm" variant="secondary">Tạo lại</Button>}
    >
      <p style={body}>Giao Vụ Tổng hợp chủ trì, các đơn vị liên quan phối hợp, hoàn thành trước ngày 15/10.</p>
    </Card>
  </div>
)
```

### Plain

```jsx
() => (
  <div style={{ width: 420 }}>
    <Card>
      <p style={body}>Thẻ không tiêu đề dùng để gói một khối nội dung ngắn.</p>
    </Card>
  </div>
)
```
