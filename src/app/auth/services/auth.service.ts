import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currPlatform = inject(PLATFORM_ID);

  users: User[] = [];
  logged = new BehaviorSubject<any>(null);

  constructor() {}

  login(user: any) {
    if (isPlatformBrowser(this.currPlatform)) {
      this.users = JSON.parse(localStorage.getItem('usersData') || '[]');
      let existUser = this.users.find((elem) => elem.email == user.email);
      if (existUser) {
        localStorage.setItem('logged', JSON.stringify(existUser));
        this.logged.next(user);
      }
    }
  }

  logout() {
    localStorage.removeItem('logged');
  }

  register(user: User) {
    if (isPlatformBrowser(this.currPlatform)) {
      this.users = JSON.parse(localStorage.getItem('usersData') || '[]');
      let existUser = this.users.find((elem) => elem.email == user.email);
      if (existUser) {
        console.log('This user Already Registered Before');
      } else {
        this.users.push(user);
        localStorage.setItem('usersData', JSON.stringify(this.users));
      }
    }
  }
}
