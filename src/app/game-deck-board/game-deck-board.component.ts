import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
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

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.matrix = JSON.parse(localStorage.getItem("matrix"));

    this.newGameStartingSubscription = this.gameService.newGameStarting$.subscribe(
      this.onNewGameStarted
    );
  }

  onNewGameStarted = (cardNumber) => {
    this.cardNumber = cardNumber;
    this.matrix = JSON.parse(localStorage.getItem("matrix"));
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

  ngOnDestroy(): void {
    if (this.newGameStartingSubscription) {
      this.newGameStartingSubscription.unsubscribe();
    }
  }
}
