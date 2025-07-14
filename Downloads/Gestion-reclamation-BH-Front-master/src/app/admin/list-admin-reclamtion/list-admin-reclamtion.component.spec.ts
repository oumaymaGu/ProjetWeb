import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminReclamtionComponent } from './list-admin-reclamtion.component';

describe('ListAdminReclamtionComponent', () => {
  let component: ListAdminReclamtionComponent;
  let fixture: ComponentFixture<ListAdminReclamtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminReclamtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdminReclamtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
