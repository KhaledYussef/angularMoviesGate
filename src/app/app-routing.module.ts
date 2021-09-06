import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './UI/auth/login/login.component';
import { RegisterComponent } from './UI/auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './UI/helpers/page-not-found/page-not-found.component';
import { FooterMenuComponent } from './UI/helpers/footer-menu/footer-menu.component';
import { NavMenuComponent } from './UI/helpers/nav-menu/nav-menu.component';
import { ToastsContainer } from './services/toast/toasts-container.component';
import { ResetPasswordComponent } from './UI/auth/reset-password/reset-password.component';
import { ErrorFeedback } from './UI/helpers/error-feedback/error-feedback.component';
import { ConfirmResetPasswordComponent } from './UI/auth/confirm-reset-password/confirm-reset-password.component';
import { DashboardComponent } from './UI/admin/dashboard/dashboard.component';
import { UsersListComponent } from './UI/admin/user/users-list/users-list.component';
import { AddUserComponent } from './UI/admin/user/add-user/add-user.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"resetpassword",component:ResetPasswordComponent},
  {path:"confirmresetpassword",component:ConfirmResetPasswordComponent},
  {path:"dashboard",component:DashboardComponent},

  {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents =[
  // Helpers
  NavMenuComponent,
  FooterMenuComponent,
  ToastsContainer,
  ErrorFeedback,

  // Screens
  LoginComponent,
  HomeComponent,
  RegisterComponent,
  PageNotFoundComponent,
  ResetPasswordComponent,
  ConfirmResetPasswordComponent,
  DashboardComponent,
  UsersListComponent,
  AddUserComponent,
]
