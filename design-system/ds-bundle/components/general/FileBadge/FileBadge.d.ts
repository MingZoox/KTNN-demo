import * as React from 'react';

/**
 * FileBadge — from vanban-dieuhanh-ui@0.3.0.
 */
export interface FileBadgeProps {
  ext: "PDF" | "DOCX" | "XLSX";
  size?: "md" | "sm";
}

export declare const FileBadge: React.ComponentType<FileBadgeProps>;
