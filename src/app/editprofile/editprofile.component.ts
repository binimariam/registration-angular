import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
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

  // selectedFile = null;
  // onFileSelected($event)
  // {
  //   this.selectedFile = event.target.files[0];
  // }
  // onUpload()
  // {
  //   this.http.post
  // }
  msg=''
  userid: number
  user= new User()

  authRequest:any={
    "username": "",
    "password": ""
  };


  constructor(private http: HttpClient,
    private service: RegistrationService,private sharedservice:SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getuser()
  }

 


  getuser()
  {
    this.userid = JSON.parse(localStorage.getItem('user'))
    this.service.profileFromRemote(this.userid).subscribe(
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
  this.sharedservice.getid();
  console.log("Data is" + this.sharedservice.getid()); 
    
  this.service.updateUserRemote(this.user,this.sharedservice.getid()).subscribe(
      response => {
        this.user = response;
        console.log(this.user=response)
        console.log("Response all" + this.user.username);
        console.log("Data is" + this.user.emailid);
        this.msg= "Updated successfully" 
        this.router.navigate(['/profile']);
    },
    error => {
      console.log("Exception occured");

    }
  )
}


  }

