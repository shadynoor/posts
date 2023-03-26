import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayedComponent } from './components/displayed/displayed.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [LoginComponent, DisplayedComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
