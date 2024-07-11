import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) {
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
    if (this.currentStep === 3 && this.step3Form.valid) {
      this.router.navigate(['/movies']);
    }
  }
}
