import { Component, Inject, OnInit, Signal } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProdTitle } from 'src/app/core/core.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppUserAuth } from 'src/app/services/interfaces/user-auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  backgroundColor = 'rgba(0, 0, 0, 0.8)';
  linkList = [
    'FAQ',
    'Help Center',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information'
  ];
  registerForm!: UntypedFormGroup;
  userSignal!: Signal<AppUserAuth>;

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  constructor(
    private fb: UntypedFormBuilder,
    private readonly authService: AuthService,
    private readonly titleService: Title,
    @Inject(ProdTitle) private readonly prodTitle: string
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.prodTitle}-SignUp`);
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.userSignal = this.authService.userSignal;
  }

  onSubmit() {
    const registrationData = {
      email: this.email?.value,
      password: this.password?.value
    };
    this.authService.register(registrationData).subscribe(
      (_) => {
        // handle successful registration
      },
      (err) => {
        console.log(err);
        // handle registration error
      }
    );
  }
}
