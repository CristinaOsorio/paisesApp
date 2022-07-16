import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from './../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [  ]
})
export class ByCountryComponent {
  word: string = 'Ho';
  hasError: boolean = false;
  countries: Country[] = [];


  constructor(private paisService: PaisService) { }

  search(word: string) {
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

  suggestions(value: string) {
    this.hasError = false;
  }

}
