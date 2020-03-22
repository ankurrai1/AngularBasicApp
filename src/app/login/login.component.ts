import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }
  doLogin(e){
    e.preventDefault();
    let username : string = e.target.username.value;
    let password = e.target.password.value
    this.auth.getUserDetails(username, password).subscribe(data=>{
      if(data.success){
        this.router.navigate(['admin'])
      }
      else{
        window.alert(data.message)
      }
    })
  }
}
