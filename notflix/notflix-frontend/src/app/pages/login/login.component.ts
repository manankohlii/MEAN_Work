import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/movies']);
        } else {
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      },
      error => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    );
  }
}
