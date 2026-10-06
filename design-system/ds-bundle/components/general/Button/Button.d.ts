import * as React from 'react';

/**
 * Button — from vanban-dieuhanh-ui@0.3.0.
 * @replaces button
 */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "brand" | "primary" | "secondary" | "muted";
  size?: "md" | "sm" | "lg" | "block";
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const Button: React.ComponentType<ButtonProps>;
