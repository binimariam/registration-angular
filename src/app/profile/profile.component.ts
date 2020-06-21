import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService} from '../service/registration.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user= new User()
  username: String
  
  constructor(
    private http: HttpClient,
    private service: RegistrationService,
    private route:ActivatedRoute,
      ) { }

  ngOnInit(){
    this.getuser();
    this.profileUser();
  }

  getuser()
  {
      this.username = sessionStorage.getItem('username')
      console.log("hello" + this.username)
  }

  profileUser()
  {
    console.log("profile user" + this.username)
    this.service.profileFromRemote(this.username).subscribe(
        response => {
          console.log(response);
          this.user = response;
          console.log(this.user=response)
          console.log("Response all" + this.user.username);
          console.log("Data is" + this.user.emailid); 
         
      },
      error => {
        console.log(error);

      }
    )
  }

  
}
