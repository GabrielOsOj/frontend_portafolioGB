import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantTarjetaComponent } from './plant-tarjeta.component';

describe('PlantTarjetaComponent', () => {
  let component: PlantTarjetaComponent;
  let fixture: ComponentFixture<PlantTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
