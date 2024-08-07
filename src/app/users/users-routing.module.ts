import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarAppointmentComponent } from './calendar-appointment/calendar-appointment.component';
import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';
import { MoveAppointmentComponent } from './move-appointment/move-appointment.component';

const routes: Routes = [
  //http://localhost:4200/users add-calendar-appointment
  { path: 'calendar', component: CalendarAppointmentComponent },
  //http://localhost:4200/users/delete appointment
  { path:'delete',component:DeleteAppointmentComponent},
  //http://localhost:4200/users/move appointment
  { path:'move',component:MoveAppointmentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
