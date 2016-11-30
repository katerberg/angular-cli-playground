import {TestBed, inject} from '@angular/core/testing';

import {PLAYERS} from './mock-players';
import {PlayerService} from './player.service';
import {Player} from './player';

describe('Service: Player', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService],
    });
  });

  it('is injectable', inject([PlayerService], (service: PlayerService) => {
    expect(service instanceof PlayerService).toBeTruthy();
  }));

  describe('#getPlayers()', () => {
    let serviceUnderTest: PlayerService;
    beforeEach(inject([PlayerService], (service: PlayerService) => {
      serviceUnderTest = service;
    }));

    it('gives promise of players', (done) => {
      serviceUnderTest.getPlayers().then((content: Player[]) => {
        expect(content).toBe(PLAYERS);
        done();
      });
    });
  });

  describe('#getPlayer()', () => {
    let serviceUnderTest: PlayerService;
    beforeEach(inject([PlayerService], (service: PlayerService) => {
      serviceUnderTest = service;
    }));

    it('gives promise of player when player exists', done => {
      const expectedPlayer: Player = new Player();
      expectedPlayer.id = 72;
      expectedPlayer.name = Math.random() + '';
      expectedPlayer.character = Math.random() + '';
      PLAYERS.push(expectedPlayer);
      serviceUnderTest.getPlayer('72').then((content: Player) => {
        expect(content).toBe(expectedPlayer);
        done();
      });
    });

    it('gives empty promise when player does not exist', done => {
      serviceUnderTest.getPlayer('not a real ID').then((content: Player) => {
        expect(content).not.toBe(jasmine.anything());
        done();
      });
    });
  });
});
