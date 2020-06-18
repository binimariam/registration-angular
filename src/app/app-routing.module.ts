import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component:ProfileComponent,canActivate:[RouteGuardService]},
  {path:'registration', component:RegistrationComponent},
  {path: 'editprofile', component: EditprofileComponent,canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
