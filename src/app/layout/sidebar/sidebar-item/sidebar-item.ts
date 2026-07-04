import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { SidebarItem } from '../../../core/models/sidebar-item.model';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItemComponent {
  item = input.required<SidebarItem>();
}
