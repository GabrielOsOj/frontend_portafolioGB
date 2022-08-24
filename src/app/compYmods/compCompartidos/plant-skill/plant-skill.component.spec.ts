import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSkillComponent } from './plant-skill.component';

describe('PlantSkillComponent', () => {
  let component: PlantSkillComponent;
  let fixture: ComponentFixture<PlantSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
