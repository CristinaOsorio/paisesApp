import { Country } from './../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
