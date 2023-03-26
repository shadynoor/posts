import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor(private serv: AuthService) {}

  ngOnInit(): void {
    this.serv.logged.subscribe((data) => {
      if (data) {
        this.isLogged = true;
      }
    });
  }

  logout() {
    this.serv.logout();
    this.isLogged = false;
  }
}
