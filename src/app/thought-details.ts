import { Component, OnInit } from '@angular/core';
import {TimeSpentForService}  from './time-spent-for.service'
@Component({
  selector: 'app-thought-details',
  template: `<h2>Thought Details</h2>
              <ul *ngFor="let detail of thoughtDetail">
              <li>{{detail.ThoughtName}} - {{detail.Date}} - {{detail.FromTime}} - {{detail.ToTime}}</li>              
              </ul>`,
  styleUrls: []

})
export class ThoughtDetailsComponent implements OnInit {
 thoughtDetail=[];
  constructor(private _thoughtDetail:TimeSpentForService) { }

  ngOnInit() {
    this._thoughtDetail.getThoughtDetails()
    .subscribe(data => this.thoughtDetail=data) ;
  }

}
