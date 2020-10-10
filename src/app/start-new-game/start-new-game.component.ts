import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-start-new-game",
  templateUrl: "./start-new-game.component.html",
  styleUrls: ["./start-new-game.component.sass"],
})
export class StartNewGameComponent implements OnInit {
  cardNumbers: number[] = [3, 4, 5, 6, 7, 8, 9, 10];
  selectedDeckSize: number;
  selectedCardNumber: number;

  constructor() {}

  ngOnInit(): void {}

  selectCardNumber(cardNumber: number) {
    this.selectedCardNumber = cardNumber;
    this.selectedDeckSize = cardNumber * 2;
  }
}
