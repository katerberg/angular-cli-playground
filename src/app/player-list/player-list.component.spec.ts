import {async, inject, TestBed, ComponentFixture} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';

import {PlayerListComponent} from './player-list.component';
import {PlayerService} from '../player.service';
import {Player} from '../player';

describe('Component: PlayerList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerListComponent,
      ],
      imports: [
        MaterialModule,
      ],
      providers: [
        PlayerService,
      ],
    });
  });

  describe('initialization', () => {
    it('creates an instance', () => {
      const fixture: ComponentFixture<PlayerListComponent> = TestBed.createComponent(PlayerListComponent);

      expect(fixture.componentInstance instanceof PlayerListComponent).toBeTruthy();
    });

    it('populates players', async(inject([PlayerService], (playerService: PlayerService) => {
      const expectedPlayers: Player[] = [new Player(), new Player()];
      spyOn(playerService, 'getPlayers').and.returnValue(Promise.resolve(expectedPlayers));

      const fixture: ComponentFixture<PlayerListComponent> = TestBed.createComponent(PlayerListComponent);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.players).toEqual(expectedPlayers);
      });
    })));
  });
});
