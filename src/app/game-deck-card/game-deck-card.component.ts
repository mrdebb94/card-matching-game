import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-game-deck-card",
  templateUrl: "./game-deck-card.component.html",
  styleUrls: ["./game-deck-card.component.sass"],
})
export class GameDeckCardComponent implements OnInit {
  @Input() removed: boolean = false;
  @Input() value: string;
  @Output() onCardFlipped: EventEmitter<string> = new EventEmitter();
  flipped: boolean;

  constructor() {}

  ngOnInit(): void {}

  @HostListener("click", ["$event.target"])
  onClick(event) {
    if (!this.flipped) {
      this.flipped = true;
      this.onCardFlipped.emit(this.value);
    }
  }
}
