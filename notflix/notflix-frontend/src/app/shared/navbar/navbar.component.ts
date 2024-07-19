import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userEmail: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      this.userEmail = this.authService.getUserEmail();
    });
  }

  signOut(): void {
    this.authService.logout();
  }
}
