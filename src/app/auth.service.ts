import { Injectable, OnInit, inject } from '@angular/core';
import * as FirebaseAuth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { JsonPipe } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  user: any;
  isLogged = JSON.parse(localStorage['isLogged'] || null);
  router: Router = inject(Router);
  constructor(private auth: AngularFireAuth) {
    auth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      console.log(user);
    });
  }
  login() {
    this.auth.signInWithRedirect(new FirebaseAuth.GoogleAuthProvider());
    localStorage.setItem('isLogged', JSON.stringify(true));
    this.router.navigate(['/']);
  }

  logout() {
    this.auth.signOut();
    localStorage.removeItem('isLogged');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.isLogged ? true : false;
  }
}
