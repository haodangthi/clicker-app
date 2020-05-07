import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent implements OnInit {
  userName=this.gameService.userName;
  lastPlay=this.gameService.plays[this.gameService.getAllPlaysNumber()-1]
  constructor( private gameService: GameService) { }

  ngOnInit(): void {
  }

}
