import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  standalone: true,
  styleUrl: './list.component.css'
})

export class ListComponent {

  items: string[] = [];

  addItem(value: string): void {
    const trimmed = value.trim();
    if (trimmed.length === 0) return;

    this.items.push(trimmed);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
