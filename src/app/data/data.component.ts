import { Component, OnInit } from '@angular/core';
import { RecondsService } from "../reconds.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  persondata = [];
  constructor(private re : RecondsService) { }

  ngOnInit(): void {
    this.re.getData().subscribe(data => {
      console.log(data)
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
    })
  }

}
