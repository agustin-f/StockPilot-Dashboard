import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/ui/components/button/button';
import { Card } from './shared/ui/components/card/card';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('StockPilot');
}
