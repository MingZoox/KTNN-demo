DateTimePicker from vanban-dieuhanh-ui. Use via `window.VanbanUI.DateTimePicker` (bundle loaded from the root `_ds_bundle.js`).

Popup edits a temporary draft. Only Apply changes the owning form's controlled value.

## Props

```ts
interface DateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
  label?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: DateTimePickerHandle) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<DateTimePickerHandle>;
}
```

## Examples

### Default

```jsx
() => {
  const [v, setV] = useState('2026-10-15T09:00');
  return (
    <div style={{ width: 280 }}>
      <DateTimePicker value={v} onChange={setV} label="Hạn xử lý" />
    </div>
  );
}
```

### Empty

```jsx
() => {
  const [v, setV] = useState('');
  return (
    <div style={{ width: 280 }}>
      <DateTimePicker value={v} onChange={setV} label="Nhắc việc lúc" />
    </div>
  );
}
```

### Invalid

```jsx
() => {
  const [v, setV] = useState('2020-01-01T08:00');
  return (
    <div style={{ width: 280 }}>
      <DateTimePicker value={v} onChange={setV} invalid label="Nhắc việc lúc" />
    </div>
  );
}
```

### Disabled

```jsx
() => (
  <div style={{ width: 280 }}>
    <DateTimePicker value="2026-10-20T14:30" onChange={() => {}} disabled label="Hạn xử lý" />
  </div>
)
```
