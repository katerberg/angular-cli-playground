import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerService} from './player.service';

@NgModule({
  declarations: [
    PlayerListComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
