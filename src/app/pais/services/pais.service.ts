
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from './../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return  new HttpParams().set('fields', 'name,population,flags,cca2,capital');
  }

  constructor(private http: HttpClient) { }

  searchCountry(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${word}`;
    return this.http.get<Country[]>(url, { params: this.httpParams }).pipe(
      tap(console.log)
    );
  }

  searchCapital(word: string) {
    const url = `${this.apiUrl}/capital/${word}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchRegion(word: string) {
    const url = `${this.apiUrl}/region/${word}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

}
