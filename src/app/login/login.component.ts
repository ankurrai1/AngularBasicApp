import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doLogin(e){
    e.preventDefault();
    console.log("username is :", e.target.username.value);
    console.log("username is :",e.target.password.value);
  }
}
