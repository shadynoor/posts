import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
