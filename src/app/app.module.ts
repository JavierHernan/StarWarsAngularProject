import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarWarsService } from './starwars.service';
import { LogService } from './log.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRouthingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRouthingModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
