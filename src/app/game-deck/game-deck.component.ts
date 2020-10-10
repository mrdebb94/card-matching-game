import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { Subscription } from "rxjs";
import { GameDeckCardComponent } from "../game-deck-card/game-deck-card.component";

@Component({
  selector: "app-game-deck",
  templateUrl: "./game-deck.component.html",
  styleUrls: ["./game-deck.component.sass"],
})
export class GameDeckComponent implements OnInit, OnDestroy {
  @Input() cardNumber: number;
  @Input() matrix: string[][] = [[]];
  @Output() onSecondCardFlipped: EventEmitter<void> = new EventEmitter();
  @Output() onGameFinished: EventEmitter<void> = new EventEmitter();

  private flippedCards: string[] = [];
  cardMismatchingTimeout: any = null;

  cardMatchesCount: number = 0;

  @ViewChildren(GameDeckCardComponent) gameDeckCardComponents: QueryList<
    GameDeckCardComponent
  >;

  constructor() {}

  onCardFlipped(card: string, gameDeckCardComponent: GameDeckCardComponent) {
    if (this.flippedCards.length < 2) {
      this.flippedCards.push(card);
      if (this.flippedCards.length == 2) {
        if (this.flippedCards[0] == this.flippedCards[1]) {
          this.flippedCards = [];
          for (let gameDeckCardComponent of this.gameDeckCardComponents) {
            if (gameDeckCardComponent.flipped) {
              gameDeckCardComponent.removed = true;
            }
          }

          if (this.cardMatchesCount == this.cardNumber) {
            this.cardMatchesCount = 0;
            this.onGameFinished.emit();
          }
        } else {
          this.cardMismatchingTimeout = setTimeout(() => {
            this.flippedCards = [];
            for (let gameDeckCardComponent of this.gameDeckCardComponents) {
              gameDeckCardComponent.flipped = false;
            }
          }, 100);
        }
        this.onSecondCardFlipped.emit();
      }
    } else {
      gameDeckCardComponent.flipped = false;
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.cardMismatchingTimeout) {
      clearTimeout(this.cardMismatchingTimeout);
    }
  }

  clear() {
    for (let gameDeckCardComponent of this.gameDeckCardComponents) {
      gameDeckCardComponent.removed = false;
      gameDeckCardComponent.flipped = false;
    }
  }
}
