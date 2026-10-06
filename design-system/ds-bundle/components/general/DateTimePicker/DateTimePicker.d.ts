import * as React from 'react';

/**
 * DateTimePicker — from vanban-dieuhanh-ui@0.3.0.
 */
export interface DateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
  label?: string;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: string | ((instance: DateTimePickerHandle) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<DateTimePickerHandle>;
}

export declare const DateTimePicker: React.ComponentType<DateTimePickerProps>;
