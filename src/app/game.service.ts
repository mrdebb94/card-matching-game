import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private newGameStartingSource = new Subject<number>();
  private currentWidth: number = 1;
  private currentHeight: number = 1;
  private cardImageNames = [
    "angular",
    "d3",
    "jenkins",
    "postcss",
    "react",
    "redux",
    "sass",
    "splendex",
    "ts",
    "webpack",
  ];

  constructor() {}

  newGameStarting$ = this.newGameStartingSource.asObservable();

  startNewGame(cardNumber: number) {
    this.currentWidth = 1;
    this.currentHeight = 1;
    this.generateDeckSize(2 * cardNumber);

    if (this.currentHeight > this.currentWidth) {
      var t = this.currentHeight;
      this.currentHeight = this.currentWidth;
      this.currentWidth = t;
    }

    var randomlySelectedCardImageNames = [];
    do {
      var index = Math.floor(Math.random() * this.cardImageNames.length);
      if (
        randomlySelectedCardImageNames.indexOf(this.cardImageNames[index]) == -1
      ) {
        randomlySelectedCardImageNames.push(this.cardImageNames[index]);
      }
    } while (randomlySelectedCardImageNames.length != cardNumber);

    var row = [];
    var counts = [];
    var matrix = [];

    for (var i = 0; i < cardNumber; i++) {
      counts[i] = 0;
    }

    do {
      var index = Math.floor(Math.random() * cardNumber);
      if (counts[index] < 2) {
        counts[index]++;
        row.push(randomlySelectedCardImageNames[index]);
        if (row.length == this.currentWidth) {
          matrix.push(row);
          row = [];
        }
      }
    } while (matrix.length != this.currentHeight);

    localStorage.setItem("matrix", JSON.stringify(matrix));
    localStorage.setItem("cardNumber", String(cardNumber));
    this.newGameStartingSource.next(cardNumber);
  }

  getCardNumber() {
    return Number(localStorage.getItem("cardNumber"));
  }

  getMatrix() {
    return JSON.parse(localStorage.getItem("matrix"));
  }

  private generateDeckSize(deckSize: number) {
    if (deckSize % Math.sqrt(deckSize) == 0) {
      this.currentWidth *= Math.sqrt(deckSize);
      this.currentHeight = Math.sqrt(deckSize);
    } else if (deckSize % 2 == 0) {
      this.currentWidth *= 2;
      this.currentHeight = Math.floor(deckSize / 2);
      this.generateDeckSize(Math.floor(deckSize / 2));
    }
  }
}
