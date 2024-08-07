import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css'],
  
})
export class AppointmentDialogComponent {
  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.appointmentForm = this.fb.group({
      title: ['',Validators.required],
      date: [data.date, Validators.required] // Set the initial date if provided
    });
  }

  onSubmit(): void {
    if(this.appointmentForm.value) {
      this.dialogRef.close(this.appointmentForm.value);
    }
   

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
