import { Component, Input, inject } from '@angular/core';

import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [],
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {

  @Input() max = 100;

  private randomService = inject(RandomService);

  value = 0;
  message = '';

  generate(): void {
    this.value = this.randomService.getRandom(this.max);

    if (this.value <= 0.5 * this.max) {
      this.message = 'Liczba jest w dolnym zakresie.';
    } else {
      this.message = 'Liczba jest w górnym zakresie.';
    }
  }
}
