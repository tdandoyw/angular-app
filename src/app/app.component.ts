import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent],
  template: `
    <app-header/>
    <main>
      <app-home/>
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
