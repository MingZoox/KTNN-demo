import * as React from 'react';

/**
 * StatusChip — from vanban-dieuhanh-ui@0.3.0.
 */
export interface StatusChipProps {
  status: "done" | "doing" | "todo";
}

export declare const StatusChip: React.ComponentType<StatusChipProps>;
