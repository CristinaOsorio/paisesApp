
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${word}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(word: string) {
    const url = `${this.apiUrl}/capital/${word}`;
    return this.http.get<Country[]>(url);
  }

  searchRegion(word: string) {
    const url = `${this.apiUrl}/region/${word}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

}
