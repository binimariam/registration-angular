import { Component, OnInit } from '@angular/core';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any={
    "username": "mini",
    "password": "mini123"
  };


  response:any;

  constructor(private service:JwtService) { }

  ngOnInit(){
    this.getAccessToken(this.authRequest)
  }


  public getAccessToken(authRequest)
 {
   let resp = this.service.generateToken(authRequest);
   resp.subscribe(data =>this.accessApi(data));
 }

 public accessApi(token)
 {
 let resp=this.service.welcome(token);
 resp.subscribe(data=>this.response=data);
 }
}
