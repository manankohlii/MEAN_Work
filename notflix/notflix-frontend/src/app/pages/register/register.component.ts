import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;
  currentStep = 1;
  emailExistsError: string | null = null;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.step1Form = this.fb.group({
      email: ['', [Validators.required, Validators.email], [this.emailExistsValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.step2Form = this.fb.group({
      username: ['', Validators.required],
      tmdbApiKey: ['', Validators.required]
    });

    this.step3Form = this.fb.group({
      plan: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authService.checkEmail(control.value).pipe(
        map(emailExists => (emailExists ? { emailExists: true } : null)),
        catchError(() => of(null))
      );
    };
  }

  goToNextStep() {
    this.submitted = true;
    if (this.currentStep === 1) {
      if (this.step1Form.valid) {
        this.currentStep = 2;
      }
    } else if (this.currentStep === 2 && this.step2Form.valid) {
      this.currentStep = 3;
    }
  }

  submit() {
    this.submitted = true;
    if (this.currentStep === 3 && this.step3Form.valid) {
      const { email, password } = this.step1Form.value;
      const { username } = this.step2Form.value;
      this.authService.signUp(username, email, password).subscribe(
        (response) => {
          localStorage.setItem('jwtToken', response.accessToken);
          this.router.navigate(['/movies']);
        },
        (error) => {
          console.error('Error signing up:', error);
        }
      );
    }
  }
}
