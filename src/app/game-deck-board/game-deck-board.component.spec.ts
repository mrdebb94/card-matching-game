import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDeckBoardComponent } from './game-deck-board.component';

describe('GameDeckBoardComponent', () => {
  let component: GameDeckBoardComponent;
  let fixture: ComponentFixture<GameDeckBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDeckBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDeckBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
