import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  getRandom(max: number): number {
    if (max <= 0) return 0;
    return Math.floor(Math.random() * max) + 1;
  }
}
