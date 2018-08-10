import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-thought-list></app-thought-list>
  <app-thought-details></app-thought-details>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
