import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">
      {{title}}
    </md-toolbar>
    <app-player-list></app-player-list>
  `,
})
export class AppComponent {
  title = 'Initiative Tracker';
}
