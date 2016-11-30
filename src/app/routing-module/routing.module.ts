import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PlayerListComponent} from '../player-list/player-list.component';
import {PlayerDetailComponent} from '../player-detail/player-detail.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'players', component: PlayerListComponent},
    {path: 'players/:playerId', component: PlayerDetailComponent},
    {path: '', redirectTo: '/players', pathMatch: 'full'},
  ])],
  exports: [RouterModule],
})
export class RoutingModule {}
