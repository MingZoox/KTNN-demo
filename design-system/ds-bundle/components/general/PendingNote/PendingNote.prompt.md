PendingNote from vanban-dieuhanh-ui. Use via `window.VanbanUI.PendingNote` (bundle loaded from the root `_ds_bundle.js`).

Khối "đang chờ AI": khung riêng + vòng quay.

Dùng CHUNG cho mọi chỗ chờ AI (tóm tắt theo tệp, tham mưu theo bước). Tách ra thành
một component vì hai chỗ đó phải giống nhau về cả hình thức lẫn hành vi — chép CSS
sang là bảo đảm sau vài lần sửa chúng sẽ lệch nhau, mà lệch kiểu đó không có gì báo.

Vì sao là khung riêng chứ không dùng lại khối chữ thường: một câu trần trơ trên nền
trắng đọc như nội dung đã xong mà chỉ có bấy nhiêu.

`role="status"` + `aria-live="polite"` để trình đọc màn hình đọc câu này khi nó hiện,
và đọc nốt nội dung thật khi nó thay chỗ.

## Props

```ts
interface PendingNoteProps {
  children: React.ReactNode;
}
```

## Examples

### Summary

```jsx
() => (
  <div style={{ width: 380 }}>
    <PendingNote>Đang tóm tắt tệp 08.9 - Tổng hợp DA KTNN 27.xlsx…</PendingNote>
  </div>
)
```

### Advice

```jsx
() => (
  <div style={{ width: 380 }}>
    <PendingNote>Đang soạn tham mưu — bước 2/3: xác định đơn vị chủ trì</PendingNote>
  </div>
)
```
