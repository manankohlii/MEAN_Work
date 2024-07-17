import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [this.emailExistsValidator()]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.loginForm.controls;
  }

  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authService.checkEmail(control.value).pipe(
        map(emailExists => (!emailExists ? { emailDoesNotExist: true } : null)),
        catchError(() => of(null))
      );
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: response => {
          console.log('Login successful', response);
          // Navigate to a different route after successful login
          this.router.navigate(['/movies']);
        },
        error: err => {
          console.error('Login failed', err);
        }
      });
  }
}
