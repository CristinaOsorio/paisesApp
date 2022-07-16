import { Component, OnInit } from '@angular/core';

import { PaisService } from './../../services/pais.service';
import { Country } from './../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {
  word: string = '';
  capitals: Country[] = [];
  hasError: boolean = false;

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  search(word: string): void {
    this.word = word;
    this.hasError = false;

    this.paisService.searchCapital(word)
    .subscribe(capitals => {
      this.capitals = capitals;
    }, error => {
      this.hasError = true;
    })
  }

}
