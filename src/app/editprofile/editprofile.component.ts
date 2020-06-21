import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../service/registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  msg=''
  username: String
  user= new User()

  constructor(private http: HttpClient,
    private service: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getuser()
  }

 


  getuser()
  {
    this.username = sessionStorage.getItem('username')
    this.service.profileFromRemote(this.username).subscribe(
      response => {
        console.log(response);
        this.user = response;
        console.log(this.user=response)
        console.log("Response all" + this.user.username);
        console.log("Data is" + this.user.emailid); 
       
    },
    error => {
      console.log("Exception occured");

    }
  )
     
  }

  updateUser()
  {
    this.service.updateUserRemote(this.user,this.username).subscribe(
      response => {
        this.user = response;
        console.log(this.user=response)
        console.log("update username" + this.user.username);
        console.log("email is" + this.user.emailid);
        sessionStorage.setItem('username',this.user.username);
        this.msg= "Updated successfully" 
        this.router.navigate(['/profile']);
    },
    error => {
      console.log("Exception occured");

    }
  )
}


  }

