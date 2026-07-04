import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Avatar } from '../../shared/ui/components/avatar/avatar';
import { SIDEBAR_ITEMS } from '../../core/constants/sidebar-items';
import { SidebarItemComponent } from './sidebar-item/sidebar-item';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItemComponent, Avatar],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuItems = SIDEBAR_ITEMS;

  user = {
    name: 'Agustin',
    avatar: 'assets/avatar.png',
  };
}
