import * as React from 'react';

/**
 * PresetChip — from vanban-dieuhanh-ui@0.3.0.
 */
export interface PresetChipProps {
  children: string;
  size?: "sm" | "lg";
  onClick?: () => void;
}

export declare const PresetChip: React.ComponentType<PresetChipProps>;
