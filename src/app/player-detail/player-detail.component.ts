import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../player';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  template: `
    <p *ngIf="player">
      {{player.name}}
    </p>
  `,
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
