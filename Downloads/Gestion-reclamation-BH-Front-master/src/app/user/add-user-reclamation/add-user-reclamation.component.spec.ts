import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserReclamationComponent } from './add-user-reclamation.component';

describe('AddUserReclamationComponent', () => {
  let component: AddUserReclamationComponent;
  let fixture: ComponentFixture<AddUserReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
