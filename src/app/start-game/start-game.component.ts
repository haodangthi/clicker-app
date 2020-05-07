import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Play } from 'src/play';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  seconds: number = 10;
  timer;
  clickCounter: number = 0
  play: Play
  gameStarted: boolean = false

  constructor(private gameService: GameService,
    private router: Router) { }

  start = () => {
    this.seconds <= 0 ? this.seconds = 10 : true
    this.clickCounter = 0
    this.gameStarted = !this.gameStarted

    this.timer = setInterval(() => {
      (this.seconds === 0) ? this.stop() : this.seconds--;
    }, 1000)
  }
  countClick(): void {
    this.clickCounter++
  }
  stop = () => {
    this.gameStarted = this.gameStarted
    this.play = { round: this.gameService.getAllPlaysNumber() + 1, clicks: this.clickCounter }
    this.gameService.addPlay(this.play)

    clearInterval(this.timer);
    this.router.navigate(['/finish'])

  }
  ngOnInit(): void {
  }

}
