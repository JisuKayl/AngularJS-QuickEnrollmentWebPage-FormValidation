import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jkfb_formvalidation2';

  studentName: string = '';
  lastName: string = '';
  studentId: string = '';
  address: string = '';
  course: string = '';
  level: string = '';
  details: string = '';

  submitEnrollmentForm() {
    console.log('Form Submitted');
  }
}
