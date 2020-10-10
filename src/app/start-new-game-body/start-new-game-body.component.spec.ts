import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewGameBodyComponent } from './start-new-game-body.component';

describe('StartNewGameBodyComponent', () => {
  let component: StartNewGameBodyComponent;
  let fixture: ComponentFixture<StartNewGameBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartNewGameBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNewGameBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
