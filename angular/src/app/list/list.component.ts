import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.personService.getAll().subscribe(data => {
      this.persons = data;
    });
  }

  delete(id?: number): void {
    if (id === undefined) {
      return;
    }

    this.personService.delete(id).subscribe(() => {
      this.loadPersons();
    });
  }
}
