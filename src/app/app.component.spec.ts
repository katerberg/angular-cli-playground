import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';

import {RoutingModule} from './routing-module/routing.module';
import {AppComponent} from './app.component';
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerService} from './player.service';

describe('App: Initiative Tracker', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayerDetailComponent,
        PlayerListComponent,
      ],
      imports: [
        MaterialModule,
        RoutingModule,
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
