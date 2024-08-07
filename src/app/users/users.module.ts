import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';
import { MoveAppointmentComponent } from './move-appointment/move-appointment.component';
import { CalendarAppointmentComponent } from './calendar-appointment/calendar-appointment.component';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarAppointmentComponent },
  { path: 'delete', component: DeleteAppointmentComponent },
  { path: 'move', component: MoveAppointmentComponent }
];

@NgModule({
  declarations: [
    DeleteAppointmentComponent,
    AppointmentDialogComponent,
    MoveAppointmentComponent
  ],
  imports: [
    
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],

})
export class UsersModule { }
