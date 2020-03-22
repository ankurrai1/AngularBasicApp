import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username:string, password:string){
    this.http.post("api/auth.php",{})
    console.log(username, password);
  }
}
