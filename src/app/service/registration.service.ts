import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../user';
import { API_URL } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http: HttpClient) {

  }


  public fileupload(formData, username): Observable<any> {
    console.log("upload")
    return this.http.post<String>(`${API_URL}/upload/${username}`, formData);

  }

  // public fileretrieve(formData, username): Observable<any> {
  //   console.log("download")
  //   return this.http.post<String>(`${API_URL}/image/${username}`, formData);

  // }

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>(`${API_URL}/login`, user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>(`${API_URL}/registeruser`, user)
  }

  public profileFromRemote(username: String): Observable<any> {
    return this.http.get<User>(`${API_URL}/profile/${username}`)
  }

  public updateUserRemote(user: User, username: String) {
    return this.http.put<User>(`${API_URL}/editprofile/${username}`, user)
  }

}

