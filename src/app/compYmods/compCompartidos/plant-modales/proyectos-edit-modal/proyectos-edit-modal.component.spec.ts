import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEditModalComponent } from './proyectos-edit-modal.component';

describe('ProyectosEditModalComponent', () => {
  let component: ProyectosEditModalComponent;
  let fixture: ComponentFixture<ProyectosEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
