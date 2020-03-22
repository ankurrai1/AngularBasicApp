import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  doLogin(e){
    e.preventDefault();
    let username : string = e.target.username.value;
    let password = e.target.password.value
    this.auth.getUserDetails(username, password);
  }
}
