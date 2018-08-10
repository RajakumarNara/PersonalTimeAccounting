import { Component, OnInit } from '@angular/core';
import {TimeSpentForService} from './time-spent-for.service';

@Component({
  selector: 'app-thought-list',
  template: `<h2>Thought List</h2> 
   <ul *ngFor="let thought of thoughtList"> 
  <li>{{thought.ThoughtName}}</li>
  </ul>`,
  styleUrls: []
})
export class ThoughtListComponent implements OnInit {
  public thoughtList=[];
  constructor(private _thoughts:TimeSpentForService) {}
  ngOnInit() {
    this._thoughts.getThoughtDetails()
    .subscribe(data => this.thoughtList=data) ;
  }
}
