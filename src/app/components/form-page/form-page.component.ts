import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  standalone: false,
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss',
})
export class FormPageComponent {
  form_data = {
    username: '',
    password: '',
    re_password: '',
    email: '',
    first_name: '',
    last_name: '',
    agree: false,
  };
  form_error_message: string = '';

  constructor() {}

  onSubmit() {
    const { password, re_password, agree } = this.form_data;

    if (password != re_password) {
      this.form_error_message = 'รหัสผ่านไม่ตรงกัน';
      return;
    }

    if (!agree) {
      this.form_error_message = 'คุณไม่ยอมรับเงื่อนไข';
      return;
    }

    console.log(this.form_data);
  }
}
