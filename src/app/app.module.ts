import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StartNewGameComponent } from "./start-new-game/start-new-game.component";
import { SharedModule } from "./shared/shared.module";
import { GameDeckComponent } from "./game-deck/game-deck.component";
import { StartNewGameBodyComponent } from "./start-new-game-body/start-new-game-body.component";
import { GameStatusComponent } from "./game-status/game-status.component";
import { GameDeckBoardComponent } from "./game-deck-board/game-deck-board.component";
import { GameDeckCardComponent } from './game-deck-card/game-deck-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StartNewGameComponent,
    GameDeckComponent,
    StartNewGameBodyComponent,
    GameStatusComponent,
    GameDeckBoardComponent,
    GameDeckCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
