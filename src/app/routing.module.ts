import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PlayerListComponent} from './player-list/player-list.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'players', component: PlayerListComponent},
    {path: '', redirectTo: '/players', pathMatch: 'full'},
  ])],
  exports: [RouterModule],
})
export class RoutingModule {}
