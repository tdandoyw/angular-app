import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  standalone: true,
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  counterValue = signal(0);

  increment(): void {
    this.counterValue.update((value) => value + 1)
  }

  decrement(): void {
    this.counterValue.update((value) => value - 1)
  }

  reset(): void {
    this.counterValue.set(0)
  }
}
