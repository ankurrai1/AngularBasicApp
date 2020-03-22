import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  success: boolean,
  message:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus
  constructor(private http: HttpClient) { }

  get isLoggedIn(){
    return this.loggedInStatus
  }
  setLoggedIn(status :boolean){
    this.loggedInStatus = status
  }
  getUserDetails(username:string, password:string){
    return this.http.post<myData>("api/auth.php",{"username":username,"password":password})
  }
}
