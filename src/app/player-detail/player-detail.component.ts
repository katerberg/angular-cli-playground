import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../player';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  template: `
    <div class="player-detail" *ngIf="player">
      <h1>{{player.character}}</h1>
      <h2>{{player.name}}</h2>
    </div>
  `,
  styles: [`
    .player-detail {
      margin-left: 8px;
    }
    h2 {
      margin-left: 16px;
    }
  `],
})
export class PlayerDetailComponent implements OnInit {
  player: Player;

  constructor(private playerService: PlayerService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let playerId: string = params['playerId'];
      this.playerService.getPlayer(playerId).then((player: Player) => this.player = player);
    });
  }
}
