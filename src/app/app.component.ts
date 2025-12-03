import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RandomComponent } from './random/random.component';
import { ListComponent } from "./list/list.component"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RandomComponent, ListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab11';
  name = 'Damian';

  protected readonly RandomComponent = RandomComponent;
  protected readonly ListComponent = ListComponent;
}
