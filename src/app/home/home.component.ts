import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public SomeVariable = true
  constructor() { }

  ngOnInit(): void {
  }

  toggelVariable(){
    this.SomeVariable = !this.SomeVariable;
  }

}
