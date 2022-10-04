import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../starwars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],

})
export class ItemComponent implements OnInit {
  @Input() character:any;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onAssign(side:any) {
    console.log("hey");
    this.swService.onSideChosen({name: this.character.name, side: side});
  }

}
