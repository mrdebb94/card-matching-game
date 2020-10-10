import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { GameService } from "../game.service";

@Component({
  selector: "app-start-new-game-body",
  templateUrl: "./start-new-game-body.component.html",
  styleUrls: ["./start-new-game-body.component.sass"],
})
export class StartNewGameBodyComponent implements OnInit, OnDestroy {
  private newGameStartingSubscription: Subscription;
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.newGameStartingSubscription = this.gameService.newGameStarting$.subscribe(
      this.onNewGameStarted
    );
  }

  onNewGameStarted = (cardNumber) => {
    this.router.navigate(["game-deck"]);
  };

  ngOnDestroy(): void {
    if (this.newGameStartingSubscription) {
      this.newGameStartingSubscription.unsubscribe();
    }
  }
}
