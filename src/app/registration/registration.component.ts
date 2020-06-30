import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(
    private router: Router,
    private service: RegistrationService,
    private httpClient: HttpClient,

  ) { }

  user = new User()
  msg = '';
  file: any
  public userFile: any = File;


  ngOnInit() {
  }


  onSelectFile(event) {
    this.file = event.target.files[0];
  }

  registerUser() {
    this.userFile = this.file;

    const formData = new FormData();
    formData.append('file', this.userFile);

    this.service.registerUserFromRemote(this.user).subscribe(
      data => {

        this.service.fileupload(formData, this.user.username)
          .subscribe(
            data => {
              console.log(data)
            },
            error => {
              console.log(error.error.text);

            }
          )
        console.log(data)
        console.log("Response received");
        //this.msg = "Registration successful";
        this.router.navigate(['/login']);
      },
      error => {
        console.log("Error")
        //this.msg="Username already exists";   
        this.msg = error.message
      }
    )
  }



}

