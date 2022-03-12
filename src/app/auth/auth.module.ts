import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { AuthRoutingModule }  from './auth-routing.module';
import { MainComponent }      from './pages/main/main.component';
import { RegisterComponent }  from './pages/register/register.component';
import { LoginComponent }     from './pages/login/login.component';
import { SharedModule }       from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
       MainComponent,
       RegisterComponent,
       LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
