import {async, inject, TestBed, ComponentFixture} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {Router} from '@angular/router';

import {PlayerListComponent} from './player-list.component';
import {PlayerService} from '../player.service';
import {Player} from '../player';

describe('Component: PlayerList', () => {
  let mockRouter;
  beforeEach(() => {
    mockRouter = {};
    TestBed.configureTestingModule({
      declarations: [
        PlayerListComponent,
      ],
      imports: [
        MaterialModule,
      ],
      providers: [
        PlayerService,
        {provide: Router, useValue: mockRouter},
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

  describe('after initialization', () => {
    let fixture: ComponentFixture<PlayerListComponent>;
    describe('#goToDetail()', () => {
      beforeEach(() => {
        mockRouter.navigate = jasmine.createSpy('navigateSpy');
        fixture = TestBed.createComponent(PlayerListComponent);
      });

      it('routes to detail page', () => {
        const input = new Player();
        input.id = 758;

        fixture.componentInstance.goToDetail(input);

        expect(mockRouter.navigate).toHaveBeenCalledWith(['/players', 758]);
      });
    });
  });
});
