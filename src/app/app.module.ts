import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerService} from './player.service';
import {RoutingModule} from './routing-module/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    PlayerListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule,
  ],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
