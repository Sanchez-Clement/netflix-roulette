import { Component, OnInit } from '@angular/core';
import { NetflixrequestService } from '../netflixrequest.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private netflixrequest: NetflixrequestService) {}

  ngOnInit() {
  }

}
