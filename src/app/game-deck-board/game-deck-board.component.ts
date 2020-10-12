import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { GameDeckComponent } from "../game-deck/game-deck.component";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-deck-board",
  templateUrl: "./game-deck-board.component.html",
  styleUrls: ["./game-deck-board.component.sass"],
})
export class GameDeckBoardComponent implements OnInit {
  @Input() matrix: string[][] = [[]];
  currentTries: number = 0;
  best: number = null;
  cardNumber: number;

  private newGameStartingSubscription: Subscription;
  @ViewChild(GameDeckComponent) gameDeckComponent: GameDeckComponent;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.matrix = JSON.parse(localStorage.getItem("matrix"));
    this.cardNumber = this.gameService.getCardNumber();

    this.newGameStartingSubscription = this.gameService.newGameStarting$.subscribe(
      this.onNewGameStarted
    );
  }

  onNewGameStarted = (cardNumber) => {
    this.currentTries = 0;
    this.best = null;
    this.cardNumber = this.gameService.getCardNumber();
    this.matrix = this.gameService.getMatrix();
    this.gameDeckComponent.clear();
  };

  onSecondCardFlipped = () => {
    this.currentTries++;
  };

  onGameFinished = () => {
    this.best =
      this.best == null
        ? this.currentTries
        : Math.min(this.currentTries, this.best);
  };

  restart() {
    this.currentTries = 0;
    this.gameDeckComponent.clear();
  }

  ngOnDestroy(): void {
    if (this.newGameStartingSubscription) {
      this.newGameStartingSubscription.unsubscribe();
    }
  }
}
