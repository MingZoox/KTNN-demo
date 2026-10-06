import * as React from 'react';

/**
 * SegmentedControl — from vanban-dieuhanh-ui@0.3.0.
 */
export interface SegmentedControlProps {
  items: readonly string[];
  value: number;
  onChange: (index: number) => void;
  /** "wide" dùng cho các nhóm nút trong khối nhập liệu (chữ 12px). */
  size?: "sm" | "wide";
  ariaLabel?: string;
}

export declare const SegmentedControl: React.ComponentType<SegmentedControlProps>;
