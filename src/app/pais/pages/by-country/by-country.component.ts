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

  search() {
    this.hasError = false;
    
    this.paisService.searchCountry(this.word)
    .subscribe(countries => {
      this.countries = countries;
    }, error => {
      this.hasError = true;
      this.countries=[];
    })
  }

}
