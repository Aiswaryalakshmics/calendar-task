import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homeview',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
  standalone: true,
  imports:[CommonModule,MatButtonModule,MatDividerModule,MatIconModule]
})
export class HomeviewComponent implements OnInit {
  currentDate: Date = new Date();
  calendar: (Date | null)[][] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let dayCounter = 1;
    this.calendar = [];

    for (let week = 0; week < 6; week++) {
      this.calendar[week] = [];
      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < firstDayOfMonth) || dayCounter > daysInMonth) {
          this.calendar[week][day] = null;
        } else {
          this.calendar[week][day] = new Date(year, month, dayCounter++);
        }
      }
    }
  }

  isToday(date: Date | null): boolean {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  navigateToAppointments(): void {
    this.router.navigate(['/appointments/calendar']);
  }
}