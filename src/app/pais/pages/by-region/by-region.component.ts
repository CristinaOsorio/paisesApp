import { Country } from './../../interfaces/country.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements OnInit {
  regions: string[] = [
    'americas',
    'africa',
    'asia',
    'europe',
    'oceania'
  ];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(
    private paisService:PaisService
  ) { }

  ngOnInit(): void {
  }

  regionActivate(region: string) {
    if (region == this.activeRegion) return;

    this.activeRegion = region;
    this.countries = [];
    this.paisService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
    })
  }

  getClassBtn(region: string ): string {
    return  region === this.activeRegion ?
      'btn-primary' : 
      'btn-outline-primary';
    
  }

}
