import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrl: './bs-navbar.component.css',
})
export class BsNavbarComponent {
  constructor(public auth: AuthService) {}
  handleLogout() {
    this.auth.logout();
  }
}
