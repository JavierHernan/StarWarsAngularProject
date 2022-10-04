import { Injectable } from '@angular/core';
// import { EventEmitter } from 'stream';
import {LogService} from './log.service';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  private charactersList = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  private logServiceVar: LogService;
  charactersChanged = new Subject<void> ();
  http: HttpClient;

  constructor(logServiceVar: LogService, http: HttpClient) {
    this.logServiceVar = logServiceVar;
    this.http = http;
  }

  fetchCharacter() {
    this.http.get('https://swapi.dev/api/people/')
    .subscribe(
      (response:any) => {
        console.log(response);
        this.charactersList = response.results;
        console.log(this.charactersList);
        this.charactersChanged.next();
      }
    );
  }

  getCharacters(chosenList:any) {
    if (chosenList === 'all') {
      return this.charactersList.slice();
    }
    return this.charactersList.filter((char) => {
      return char.side === chosenList;
    })
  }

  onSideChosen(charInfo:any) {
    let pos = this.charactersList.findIndex((char) => {
      // return char.name === charInfo.name;
      return charInfo?.name === char.name
    })
    this.charactersList[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logServiceVar.writeLog('Changed side of '+ charInfo.name + ', new side: ' + charInfo.side);
  }

  addCharacter(name:any, side:any) {
    const pos = this.charactersList.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side:side};
    this.charactersList.push(newChar);
  }
}
