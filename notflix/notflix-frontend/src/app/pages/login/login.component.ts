import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getEmailErrorMessage() {
    const emailControl = this.loginForm.get('email');
    if (!emailControl) {
      return '';
    }
    if (emailControl.hasError('required')) {
      return 'You must enter a value';
    }
    return emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    const passwordControl = this.loginForm.get('password');
    if (!passwordControl) {
      return '';
    }
    if (passwordControl.hasError('required')) {
      return 'You must enter a value';
    }
    return passwordControl.hasError('minlength') ? 'Password must be at least 6 characters long' : '';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Login form data:', this.loginForm.value);
    }
  }
}
