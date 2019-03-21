import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEntityComponent } from './add-new-entity.component';

describe('AddNewEntityComponent', () => {
  let component: AddNewEntityComponent;
  let fixture: ComponentFixture<AddNewEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
