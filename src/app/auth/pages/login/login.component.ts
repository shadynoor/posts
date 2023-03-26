import { Component } from '@angular/core';
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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onLogin() {
    const user: User = {
      email: this.loginForm.controls.email.value || '',
      password: this.loginForm.controls.password.value || '',
    };

    this.authService.login(user);

    if ('logged' in localStorage) {
      this.router.navigate(['posts']);
    }
  }
}
