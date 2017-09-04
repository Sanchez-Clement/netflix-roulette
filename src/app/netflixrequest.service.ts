import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class NetflixrequestService {
resultatEnvoi : any;
results : any;
urlEnvoi:any;
    constructor(private http: HttpClient) {}

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
