import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from './../../services/pais.service';
import { Country } from './../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRouter: ActivatedRoute,
    private countryService: PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) => {
        return this.countryService.getCountryByAlpha(id)
      })
    ).subscribe((country) => {
      this.country = country[0];
    })
  }

}
