import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserReclamationComponent } from './list-user-reclamation.component';

describe('ListUserReclamationComponent', () => {
  let component: ListUserReclamationComponent;
  let fixture: ComponentFixture<ListUserReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
