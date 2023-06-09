import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, HomeComponent],
})
export class LayoutModule {}
