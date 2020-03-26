import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  title = 'Angular 7 Project!';
  todaydate = new Date();
  jsonval = {name:'rahul', age:'22', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug",
   "Sept", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit(): void {
  }

}
