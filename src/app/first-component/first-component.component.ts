import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  i = 0;
  someVariable = Math.random();
  constructor() { }
  ngOnInit(): void {
    // like when we add a time interval function it will call it so many times
    // if any variable is changed
    // uncomment the following code to see effect
  
    // setInterval(() => {
    //   this.someVariable = Math.random();
    // }, 1000);
  }
  // we should not use some function call in interpolateion because it will
  // call every time when view will refresh

  doSomeTask(){
    console.log(`Called ${this.i++} times`)
  }

}
