import { Component, OnInit } from '@angular/core';
import { NetflixrequestService } from '../netflixrequest.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

constructor(private netflixrequest: NetflixrequestService) {}

  ngOnInit() {
  }

}
