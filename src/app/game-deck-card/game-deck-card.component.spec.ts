import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDeckCardComponent } from './game-deck-card.component';

describe('GameDeckCardComponent', () => {
  let component: GameDeckCardComponent;
  let fixture: ComponentFixture<GameDeckCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDeckCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDeckCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
