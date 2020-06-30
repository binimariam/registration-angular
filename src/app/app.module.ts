import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationService } from './service/registration.service';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BasicAuthInterceptorService } from './service/basic-auth-interceptor.service';
import { AuthGuardService } from './service/auth-guard.service';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    LogoutComponent,
    EditprofileComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:BasicAuthInterceptorService,multi:true},AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
