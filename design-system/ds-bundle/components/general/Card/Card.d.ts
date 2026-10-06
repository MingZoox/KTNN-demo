import * as React from 'react';

/**
 * Card — from vanban-dieuhanh-ui@0.3.0.
 */
export interface CardProps {
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

export declare const Card: React.ComponentType<CardProps>;
