import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLogged = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onLogin() {
    const user: User = {
      email: this.loginForm.controls.email.value || '',
      password: this.loginForm.controls.password.value || '',
    };
    this.isLogged = true;

    this.authService.login(user);

    if (isPlatformBrowser(this.authService.currPlatform)) {
      if ('logged' in localStorage) {
        setTimeout(() => {
          this.isLogged = false;
          this.router.navigate(['posts']);
        }, 1000);
      }
    }
  }
}
