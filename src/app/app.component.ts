import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">
      {{title}}
    </md-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title: string = 'Initiative Tracker';
}
