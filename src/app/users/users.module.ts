import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    UserListComponent,
    ChallengeComponent,
    FormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    SigninComponent,
    UserListComponent,
    ChallengeComponent,
    FormComponent
  ]
})
export class UsersModule { }
