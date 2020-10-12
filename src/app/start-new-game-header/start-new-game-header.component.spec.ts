import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewGameHeaderComponent } from './start-new-game-header.component';

describe('StartNewGameHeaderComponent', () => {
  let component: StartNewGameHeaderComponent;
  let fixture: ComponentFixture<StartNewGameHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartNewGameHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNewGameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
