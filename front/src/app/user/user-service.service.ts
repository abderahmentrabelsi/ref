import { Injectable } from '@angular/core';
//import http client to make the requests
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiURL = 'http://localhost:4000/users';

  constructor(private http:HttpClient) { }

  getAllusers(){
    return this.http.get(this.apiURL);
  }

  addUser(user: any){
    return this.http.post(this.apiURL, user);
  }





}
