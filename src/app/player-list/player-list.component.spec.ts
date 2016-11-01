import {async, inject, TestBed} from '@angular/core/testing';

import {PlayerListComponent} from './player-list.component';
import {PlayerService} from '../player.service';
import {Player} from '../player';

describe('Component: PlayerList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerListComponent,
      ],
      providers: [
        PlayerService,
      ],
    });
  });

  describe('initialization', () => {
    it('creates an instance', () => {
      const fixture = TestBed.createComponent(PlayerListComponent);

      expect(fixture.componentInstance instanceof PlayerListComponent).toBeTruthy();
    });

    it('populates players', async(inject([PlayerService], (playerService: PlayerService) => {
      const expectedPlayers = [new Player(), new Player()];
      spyOn(playerService, 'getPlayers').and.returnValue(Promise.resolve(expectedPlayers));

      const fixture = TestBed.createComponent(PlayerListComponent);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.players).toEqual(expectedPlayers);
      });
    })));
  });
});
