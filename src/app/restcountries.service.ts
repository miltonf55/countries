import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {
  constructor(private http: HttpClient) { }

  countrieNameQuery(name:string): Observable<any>
  {
    return this.http.get('https://restcountries.com/v3.1/name/'+name)
  }
  countrieCurrencyQuery(name:string): Observable<any>
  {
    return this.http.get('https://restcountries.com/v3.1/currency/'+name)
  }
  countrieRegionQuery(name:string): Observable<any>
  {
    return this.http.get('https://restcountries.com/v3.1/region/'+name)
  }
}
