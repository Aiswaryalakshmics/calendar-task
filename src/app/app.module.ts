import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeviewComponent} from './home-view/home-view.component';
import { UsersModule } from './users/users.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
  { path: '', component: HomeviewComponent },
  { path: 'appointments', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UsersModule,
    MatDividerModule,
    MatIconModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HomeviewComponent,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
