// widgets/Sidebar/model/types/sidebar.ts
import React from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
