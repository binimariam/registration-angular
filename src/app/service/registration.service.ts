import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../user';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http:HttpClient)
     { }


  public generateToken(request)
  {
    return this.http.post("http://localhost:8080/authenticate",request,{responseType: 'text' as 'json'});
  } 

  public loginUserFromRemote(user: User):Observable<any>
  {
    return this.http.post<any>(`${API_URL}/login`,user)
  }

  public registerUserFromRemote(user: User):Observable<any>
  {
    return this.http.post<any>(`${API_URL}/registeruser`,user)
  }

  public profileFromRemote(id: number):Observable<any>
  {
    return this.http.get<User>(`${API_URL}/profile/${id}`)
  }

  public updateUserRemote(user: User,id: number)
  {
    return this.http.put<User>(`${API_URL}/editprofile/${id}`,user)
  }

}

