import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private newGameStartingSource = new Subject<number>();
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
        if (row.length == 2) {
          matrix.push(row);
          row = [];
        }
      }
    } while (matrix.length != cardNumber);

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
}
