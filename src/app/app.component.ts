import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header/>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        padding-inline: 16p;
      }
    `
  ],
  standalone: true
})
export class AppComponent {
  title = 'Angular_app';
}
