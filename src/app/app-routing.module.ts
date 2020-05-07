import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { StartGameComponent } from './start-game/start-game.component';
import { EndGameComponent } from './end-game/end-game.component';
import { MyGamesComponent } from './my-games/my-games.component';


const routes: Routes = [
  { path: '', redirectTo: '/greet', pathMatch: 'full' },
  { path: 'greet', component: GreetComponent , data: {animation: 'GreetPage'}},
  { path: 'game', component: StartGameComponent , data: {animation: 'GamePage'}},
  { path: 'finish', component: EndGameComponent },
  { path: 'myGames', component: MyGamesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
