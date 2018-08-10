import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TimeSpentForService} from './time-spent-for.service';
import { ThoughtListComponent } from './thought-list';
import { ThoughtDetailsComponent } from './thought-details';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ThoughtListComponent,
    ThoughtDetailsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [TimeSpentForService],
  bootstrap: [AppComponent]
})
export class AppModule { }
