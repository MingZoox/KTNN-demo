import * as React from 'react';

/**
 * RoleBadge — from vanban-dieuhanh-ui@0.3.0.
 */
export interface RoleBadgeProps {
  role: "chu_tri" | "phoi_hop" | "de_biet";
  /** `icon` = chỉ vòng tròn icon, dùng chỗ chật. Mặc định có cả chữ. */
  variant?: "full" | "icon";
}

export declare const RoleBadge: React.ComponentType<RoleBadgeProps>;
