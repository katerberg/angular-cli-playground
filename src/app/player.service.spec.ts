import {TestBed, inject} from '@angular/core/testing';

import {PLAYERS} from './mock-players';
import {PlayerService} from './player.service';

describe('Service: Player', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService],
    });
  });

  describe('#getPlayers()', () => {
    let serviceUnderTest;
    beforeEach(inject([PlayerService], (service: PlayerService) => {
      serviceUnderTest = service;
    }));

    it('gives promise of players', (done) => {
      const result = serviceUnderTest.getPlayers();
      expect(result instanceof Promise).toBeTruthy();
      result.then((content) => {
        expect(content).toBe(PLAYERS);
        done();
      });
    });
  });
});
