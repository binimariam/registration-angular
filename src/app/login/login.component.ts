import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService} from '../service/registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { SharedService } from '../service/shared.service';

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
    private sharedservice:SharedService
    ) { }

  ngOnInit() {
    
  }


  loginUser()
  {
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {  
        this.user=data
        console.log(this.user=data)
        console.log("Response received" + this.user.username);
        var ser = this.sharedservice.setid(this.user.id)
        localStorage.setItem('user',JSON.stringify(this.user.id));
        this.router.navigate(['profile']) 
       
    },
      error => {  
        console.log("Exception occured");
        this.msg="Bad Credentials.....";
      }
    )
  }

  // registration()
  // {
  //   console.log("hii")
  //   this.router.navigate(['/registration'])
  // }
}
