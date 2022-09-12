import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoTmpComponent } from './proyecto-tmp.component';

describe('ProyectoTmpComponent', () => {
  let component: ProyectoTmpComponent;
  let fixture: ComponentFixture<ProyectoTmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoTmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoTmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
