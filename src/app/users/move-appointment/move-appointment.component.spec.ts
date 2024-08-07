import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAppointmentComponent } from './move-appointment.component';

describe('MoveAppointmentComponent', () => {
  let component: MoveAppointmentComponent;
  let fixture: ComponentFixture<MoveAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoveAppointmentComponent]
    });
    fixture = TestBed.createComponent(MoveAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
