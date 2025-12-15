import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.personService.getById(id).subscribe(person => {
          this.person = person;
        });

      }
    });
  }
}
