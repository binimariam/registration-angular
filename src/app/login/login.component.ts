import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService} from '../service/registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { SharedService } from '../service/shared.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user = new User()
   msg = '';
   
  
  constructor(private service: RegistrationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginservice: AuthenticationService
    ) { }

  ngOnInit() {
    
  }


  loginUser()
  {
    console.log(this.user);
    this.loginservice.authenticate(this.user).subscribe(
      data => {
                this.router.navigate(['profile']) 
        
      },
      error => {
       console.log("Bad credentials")
       this.msg = "Bad credentials"
      }
    );
  }

}
