import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NetflixrequestService } from './netflixrequest.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule

  ],
  providers: [NetflixrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
