import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService} from '../service/registration.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user= new User()
  userid: number
  
  constructor(
    private http: HttpClient,
    private service: RegistrationService,
    private route:ActivatedRoute,
    private sharedservice:SharedService
  ) { }

  ngOnInit(){
    this.getuser();
    this.profileUser();
  }

  getuser()
  {
      this.userid = JSON.parse(localStorage.getItem('user'))
      console.log("hello" + this.user)
  }

  profileUser()
  {

    // this.sharedservice.getid();
    // console.log("Data is" + this.sharedservice.getid()); 
     //console.log("DATA" + localStorage.getItem(this.user.id))
    // var ser= this.sharedservice.getid();
   
   
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

  
}
