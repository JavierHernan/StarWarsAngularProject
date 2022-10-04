import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'udemyAngular3rdProject';
  swService: StarWarsService;

  constructor (swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {
    this.swService.fetchCharacter();

  }
}
