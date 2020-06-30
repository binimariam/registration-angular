import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/environments/environment';

// export class User{
//   constructor(
//     public status:string,
//      ) {}
  
// }

// export class JwtResponse{
//   constructor(
//     public jwttoken:string,
//      ) {}
  
// }

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(request) {
      return this.httpClient.post<any>(`${API_URL}/authenticate`,request,{responseType: 'text' as 'json'}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',request.username);
          let tokenStr= 'Bearer '+userData;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
  
      );
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
  }
}