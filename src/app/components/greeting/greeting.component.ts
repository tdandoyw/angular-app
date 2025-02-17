import {Component, input} from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  standalone: true,
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  message = input('Nothing has been passed down :(');
}
