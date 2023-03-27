import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  isReg = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onRegister() {
    const user: User = {
      email: this.loginForm.controls.email.value || '',
      name: this.loginForm.controls.name.value || '',
      password: this.loginForm.controls.password.value || '',
    };
    this.authService.register(user);

    this.isReg = true;

    setTimeout(() => {
      this.isReg = false;
      this.router.navigate(['posts']);
    }, 1000);
  }
}
