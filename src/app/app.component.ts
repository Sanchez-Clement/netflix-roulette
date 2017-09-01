import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',


  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  title = 'Star Wars';
  results: any;
  resultatEnvoi : any;
  resultatEnvoiNon : any;
  urlEnvoi : any;
  resultatDetail : any;


// Inject HttpClient into your component or service.
constructor(private http: HttpClient) {}
ngOnInit (){


};

Send(test) {
  this.resultatEnvoi = test.replace(/ /g,"%20");
  this.http.get('https://netflixroulette.net/api/api.php?title=' + this.resultatEnvoi).subscribe(data => {
    // Read the result field from the JSON response.
    this.results = data;
    this.urlEnvoi =  test;
    console.table(data)


  });
}

}
