import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBTNComponent } from './create-btn.component';

describe('CreateBTNComponent', () => {
  let component: CreateBTNComponent;
  let fixture: ComponentFixture<CreateBTNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBTNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
