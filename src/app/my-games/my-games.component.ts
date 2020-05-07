import { Component, OnInit } from '@angular/core';
import { Play } from 'src/play';
import { GameService } from '../game.service';
import { trigger, state, transition, style, animate, stagger, query } from "@angular/animations"
@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('*=>*', [
        query('li', style({ opacity: 0, transform: 'translateX(-100px)' })),
        query('li', stagger(
          '2000ms', [
          animate(2000, style({ opacity: 1, transform: 'translateX(0)' }))
        ]))
      ]

      )])]
})
export class MyGamesComponent implements OnInit {
  plays: Array<Play> = this.gameService.plays;
  constructor(private gameService: GameService) { }
  ngOnInit(): void {
  }

}
