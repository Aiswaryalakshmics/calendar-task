
import {FormsModule,FormBuilder,ReactiveFormsModule,FormGroup } from '@angular/forms';
import {ChangeDetectionStrategy,ChangeDetectorRef,Component,OnInit} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentDialogComponent } from 'src/app/appointment-dialog/appointment-dialog.component';
import { MatDialog} from '@angular/material/dialog';

interface Appointment{
  id : number;
  title : string;
  date : Date;
}

@Component({
  selector: 'app-calendar-appointment',
  templateUrl: './calendar-appointment.component.html',
  styleUrls: ['./calendar-appointment.component.css'],
  standalone :true,
  imports:[
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    
  ],
  providers : [
    {provide: NativeDateAdapter}
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class CalendarAppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  selectedDate: Date | null = null;
  constructor(public fb: FormBuilder,public dialog: MatDialog,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '250px',
      data: { date: new Date() } // Optionally pass the current date to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newAppointment: Appointment = {
          id: this.appointments.length > 0 ? Math.max(...this.appointments.map(a => a.id)) + 1 : 1,
          title: result.title,
          date: result.date,
        };
        this.appointments.push(newAppointment);
        this.saveAppointments();
        this.cdr.markForCheck();
      }
    });
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(appointment => appointment.id !== id);
    this.saveAppointments();
    this.cdr.markForCheck();
  }

  moveAppointment(id: number) {
    // Implement move logic here
  }

  saveAppointments() {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  loadAppointments() {
    const savedAppointments = localStorage.getItem('appointments');
    if (savedAppointments) {
      this.appointments = JSON.parse(savedAppointments);
      this.appointments.forEach(appointment => appointment.date = new Date(appointment.date));
    }
  }

}





