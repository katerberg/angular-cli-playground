import {Component, OnInit} from '@angular/core';

import {PlayerService} from '../player.service';
import {Player} from '../player';

@Component({
  selector: 'app-player-list',
  template: `
    <div *ngIf="players">
      <p *ngFor="let player of players">
        {{player.name}}
      </p>
    </div>
  `,
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(
    private playerService: PlayerService,
  ) {}

  ngOnInit(): void {
    this.playerService.getPlayers().then(players => {
      this.players = players;
    });
  }
}
