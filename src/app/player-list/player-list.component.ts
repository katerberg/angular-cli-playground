import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PlayerService} from '../player.service';
import {Player} from '../player';

@Component({
  selector: 'app-player-list',
  template: `
    <div *ngIf="players">
      <md-card *ngFor="let player of players" (click)="goToDetail(player)">
        <h1>{{player.character}}</h1>
        <h2>{{player.name}}</h2>
      </md-card>
    </div>
  `,
  styles: [`
    md-card {
      margin: 1em;
    }
    h1 {
      font-size: 1.5em;
      font-weight: 500;
    }
    h2 {
      font-size: 0.8em;
      margin-left: 2em;
    }
  `],
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.playerService.getPlayers().then((players: Player[]) => {
      this.players = players;
    });
  }

  goToDetail(player: Player) {
    this.router.navigate(['/players', player.id]);
  }
}
