import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-player-list',
  template: `
    <p *ngFor="let player of players">
      {{player}}
    </p>
  `,
})
export class PlayerListComponent implements OnInit {
  players = ['test1', 'test2'];

  constructor() {}

  ngOnInit() {
  }
}
