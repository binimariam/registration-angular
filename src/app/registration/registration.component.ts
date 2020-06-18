import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User()
  msg='';
  constructor(
    private router:Router,
    private service:RegistrationService
    
  ) { }

  ngOnInit() {
  }


  registerUser()
  {
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("Response received");
        console.log("Response received" + this.user.emailid);
        console.log("Response received all" + this.user);
        console.log("Response received" + this.user.username);
        this.msg="Registration successful";
        this.router.navigate(['/login']);
      },
      error =>{
        console.log("Error")
        this.msg="Email already exists";        
      }
    )
  }

  

}
