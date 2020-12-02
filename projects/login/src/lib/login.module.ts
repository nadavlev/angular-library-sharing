import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
