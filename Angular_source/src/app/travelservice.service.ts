import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const URL ="http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class TravelserviceService {

  constructor(private http:HttpClient) { 

  }

  adduser(registerform:any): Observable<any>{
    return this.http.post(URL + 'Home1' , registerform)

  }

 
 
}
