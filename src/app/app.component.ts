import { Component, OnInit } from '@angular/core';
import { NetflixrequestService } from './netflixrequest.service';
// import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{


// Inject HttpClient into your component or service.
constructor(private netflixrequest: NetflixrequestService) {}
ngOnInit (){


};



}
