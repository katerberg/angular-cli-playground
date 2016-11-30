import {TestBed, inject, async, ComponentFixture} from '@angular/core/testing';
import {PlayerDetailComponent} from './player-detail.component';
import {PlayerService} from '../player.service';
import {Player} from '../player';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

let routePlayer;

describe('Component: PlayerDetail', () => {
  beforeEach(() => {
    routePlayer = { 'playerId': '1' };
    TestBed.configureTestingModule({
      declarations: [
        PlayerDetailComponent,
      ],
      providers: [
        {provide: ActivatedRoute, useValue: {'params': Observable.from([routePlayer])}},
        PlayerService,
      ],
    });
  });

  describe('initialization', () => {
    it('creates an instance', () => {
      const fixture: ComponentFixture<PlayerDetailComponent> = TestBed.createComponent(PlayerDetailComponent);

      expect(fixture.componentInstance instanceof PlayerDetailComponent).toBeTruthy();
    });

    it('stores selected player', async(inject([PlayerService], (playerService: PlayerService) => {
      const inputId = 45;
      routePlayer.playerId = inputId + '';
      const expectedPlayer = new Player();
      expectedPlayer.id = inputId;
      spyOn(playerService, 'getPlayer').and.returnValue(Promise.resolve(expectedPlayer));
      const fixture: ComponentFixture<PlayerDetailComponent> = TestBed.createComponent(PlayerDetailComponent);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.player).toEqual(expectedPlayer);
      });
      expect(playerService.getPlayer).toHaveBeenCalledWith(inputId + '');
    })));
  });
});
