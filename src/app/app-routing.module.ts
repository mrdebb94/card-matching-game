import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameDeckBoardComponent } from "./game-deck-board/game-deck-board.component";
import { GameDeckComponent } from "./game-deck/game-deck.component";
import { StartNewGameBodyComponent } from "./start-new-game-body/start-new-game-body.component";
import { StartNewGameComponent } from "./start-new-game/start-new-game.component";

const routes: Routes = [
  {
    path: "start-new-game",
    children: [
      {
        path: "",
        component: StartNewGameBodyComponent,
        outlet: "child2",
      },
    ],
  },
  {
    path: "game-deck",
    children: [
      {
        path: "",
        component: StartNewGameComponent,
      },
      {
        path: "",
        component: GameDeckBoardComponent,
        outlet: "child2",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
