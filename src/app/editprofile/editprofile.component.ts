import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../service/registration.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  msg=''
  username: String
  file: any
  public userFile: any = File;
  user= new User()

  constructor(private http: HttpClient,
    private service: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getuser()
  }

  onSelectFile(event) {
    this.file = event.target.files[0];
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
    this.userFile = this.file;

    const formData = new FormData();
    formData.append('file', this.userFile);

    this.service.updateUserRemote(this.user,this.username).subscribe(
      response => {
        this.service.fileupload(formData, this.user.username)
        .subscribe(
          data => {
            console.log(data)
          },
          error => {
            console.log(error.error.text);

          }
        )
        this.user = response;
        console.log(this.user=response)
        console.log("update username" + this.user.username);
        console.log("email is" + this.user.emailid);
        this.msg= "Updated successfully" 
        this.router.navigate(['/profile']);
    },
    error => {
      console.log("Exception occured");

    }
  )
}


  }

