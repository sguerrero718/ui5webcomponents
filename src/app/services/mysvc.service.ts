import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MysvcService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // now other components can also call this function
  goToPage1() {
    this.router.navigate(['']);
  }

  // services to make external service call  
  getDataFromService() {
    //var localUri = "../data/someJson.json";
    //return this.http.get(localUri);
    
    var uri = 'https://services.odata.org/TripPinRESTierService/People';
    return this.http.get(uri);

  }


}
