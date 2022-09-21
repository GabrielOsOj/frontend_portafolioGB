import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdDelBTNComponent } from './upd-del-btn.component';

describe('UpdDelBTNComponent', () => {
  let component: UpdDelBTNComponent;
  let fixture: ComponentFixture<UpdDelBTNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdDelBTNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdDelBTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
