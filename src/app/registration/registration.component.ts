import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(
    private router:Router,
    private service:RegistrationService,
    private httpClient: HttpClient
    
  ) { }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  user = new User()
  msg='';
  

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
        //this.msg="Email already exists";   
        this.msg = error.message   
      }
    )
  }


   //Gets called when the user selects an image
 public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
}
//Gets called when the user clicks on submit to upload the image
onUpload() {
  console.log(this.selectedFile);
  
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
  this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
}
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
}


  

}
