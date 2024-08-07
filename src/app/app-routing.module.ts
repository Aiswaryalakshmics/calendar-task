import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeviewComponent } from './home-view/home-view.component';

const routes: Routes = [
  { path: 'appointments', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  // for homepage
  { path: '',component:HomeviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
