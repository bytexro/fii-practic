import { Component, OnInit, Input } from '@angular/core';
import { Person, Pet } from 'src/app/models';
import { PeopleWithPetsService } from 'src/app/services';

@Component({
  selector: 'app-add-new-entity',
  templateUrl: './add-new-entity.component.html',
  styleUrls: ['./add-new-entity.component.scss']
})
export class AddNewEntityComponent implements OnInit {

  @Input() type: 'person' | 'pet' = 'person';
  @Input() personId: number = null;

  public person: Person = {
    firstName: '',
    lastName: ''
  };
  public pet: Pet = { name: '' };

  constructor(
    private service: PeopleWithPetsService
  ) { }

  ngOnInit() {
  }

  add($event?) {
    if (this.type === 'person') {
      this.service.addPerson(this.person);
      this.person = { firstName: '', lastName: '' };
    } else {
      if ($event.keyCode === 13) {
        this.service.addPet(this.personId, this.pet);
        this.pet = { name: '' };
      }
    }
  }

}
