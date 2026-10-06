import * as React from 'react';

/**
 * Badge — from vanban-dieuhanh-ui@0.3.0.
 */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: "info" | "success" | "warning" | "danger" | "neutral" | "brand";
  size?: "md" | "sm";
}

export declare const Badge: React.ComponentType<BadgeProps>;
