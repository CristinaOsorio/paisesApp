import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from './../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [ `
  li {
    cursor: pointer
  }
  ` ]
})
export class ByCountryComponent {
  word: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  hasSugestions: boolean = false;


  constructor(private paisService: PaisService) { }

  search(word: string) {
    this.suggestedCountries = [];
    this.hasSugestions = false;
    this.hasError = false;
    this.word = word;

    this.paisService.searchCountry(word)
    .subscribe(countries => {
      this.countries = countries;
    }, error => {
      this.hasError = true;
      this.countries=[];
    })
  }

  suggestions(word: string) {
    this.hasError = false;
    this.hasSugestions = true;
    this.word = word;
    this.paisService.searchCountry(word)
    .subscribe(countries => {
      this.suggestedCountries = countries.splice(0,5);
    }, error => {
      this.suggestedCountries=[];
    })
  }

}
