import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  word: string = 'Hola Mundo';


  constructor() { }

  search() {
    console.log(this.word);
  }

}
