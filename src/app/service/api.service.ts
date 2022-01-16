import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  apiUrl= 'http://localhost:8080/api/getCrypto'
  
  getAllCoinsListing():Observable<any>{
    return this.httpClient.get(this.apiUrl);
    }
    
}
