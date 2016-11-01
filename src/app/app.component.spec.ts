import {TestBed, async} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerService} from './player.service';

describe('App: Initiative Tracker', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayerListComponent,
      ],
      imports: [
        MaterialModule,
      ],
      providers: [
        PlayerService,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it('should have a title', async(() => {
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('Initiative Tracker');
  }));
});
