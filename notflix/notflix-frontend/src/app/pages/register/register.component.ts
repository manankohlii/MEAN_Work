import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  submitted = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.step1Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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

  goToNextStep() {
    if (this.currentStep === 1 && this.step1Form.valid) {
      this.currentStep = 2;
    } else if (this.currentStep === 2 && this.step2Form.valid) {
      this.currentStep = 3;
    }
  }

  submit() {
    this.submitted = true;
    if (this.currentStep === 3 && this.step3Form.valid) {
      const email = this.step1Form.get('email')?.value;
      const password = this.step1Form.get('password')?.value;
      const username = this.step2Form.get('username')?.value;
      const tmdbKey = this.step2Form.get('tmdbApiKey')?.value;
      const role = this.step3Form.get('plan')?.value; 

      this.authService.signUp(email, password, username, tmdbKey, role).subscribe(
        (response) => {
          this.router.navigate(['/movies']);
        },
        (error) => {
          this.errorMessage = 'Error creating account. Please try again.';
          console.error('Error creating account:', error);
        }
      );
    }
  }
}
