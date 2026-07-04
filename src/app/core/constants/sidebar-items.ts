import { SidebarItem } from '../models/sidebar-item.model';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Productos',
    route: '/products',
    icon: 'inventory',
  },
  {
    label: 'Clientes',
    route: '/customers',
    icon: 'group',
  },
];
