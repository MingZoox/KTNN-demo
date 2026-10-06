Toggle from vanban-dieuhanh-ui. Use via `window.VanbanUI.Toggle` (bundle loaded from the root `_ds_bundle.js`).

Công tắc nhỏ — dùng cho "Kèm điều khoản trích dẫn".

## Props

```ts
interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  size?: "sm" | "lg";
}
```

## Examples

### Small

```jsx
() => {
  const [on, setOn] = useState(true);
  return <Toggle checked={on} onChange={() => setOn(!on)} label="Kèm điều khoản trích dẫn" />;
}
```

### Off

```jsx
() => {
  const [on, setOn] = useState(false);
  return <Toggle checked={on} onChange={() => setOn(!on)} label="Nhắc việc qua email" />;
}
```

### Large

```jsx
() => {
  const [on, setOn] = useState(true);
  return <Toggle size="lg" checked={on} onChange={() => setOn(!on)} label="Tự động tóm tắt văn bản đến" />;
}
```
