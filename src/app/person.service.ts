import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly storageKey = 'persons';

  constructor() {}

  getAll(): Person[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  getByIndex(index: number): Person | null {
    const persons = this.getAll();
    return persons[index] ?? null;
  }

  add(person: Person): void {
    const persons = this.getAll();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  delete(index: number): void {
    const persons = this.getAll();
    persons.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }
}
