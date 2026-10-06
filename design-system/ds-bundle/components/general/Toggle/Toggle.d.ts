import * as React from 'react';

/**
 * Toggle — from vanban-dieuhanh-ui@0.3.0.
 */
export interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  size?: "sm" | "lg";
}

export declare const Toggle: React.ComponentType<ToggleProps>;
