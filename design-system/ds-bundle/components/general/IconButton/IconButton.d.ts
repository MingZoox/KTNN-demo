import * as React from 'react';

/**
 * IconButton — from vanban-dieuhanh-ui@0.3.0.
 */
export interface IconButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "tint" | "solid" | "ghost";
  label: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export declare const IconButton: React.ComponentType<IconButtonProps>;
