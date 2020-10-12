import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameDeckBoardComponent } from "./game-deck-board/game-deck-board.component";
import { StartNewGameBodyComponent } from "./start-new-game-body/start-new-game-body.component";
import { StartNewGameHeaderComponent } from "./start-new-game-header/start-new-game-header.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "start-new-game",
  },
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
        component: StartNewGameHeaderComponent,
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
