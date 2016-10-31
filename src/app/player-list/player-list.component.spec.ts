import {TestBed, async} from '@angular/core/testing';
import {PlayerListComponent} from './player-list.component';

describe('Component: PlayerList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerListComponent,
      ],
    });
  });

  it('creates an instance', async(() => {
    const component = new PlayerListComponent();
    expect(component).toBeTruthy();
  }));

  it('exposes player list', async(() => {
    const component = new PlayerListComponent();
    expect(component.players).toEqual(['test1', 'test2']);
  }));
});
