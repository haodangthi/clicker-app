import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { GameService } from '../game.service';
import { trigger, state, transition, style, animate } from "@angular/animations"

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
      transition(':enter,:leave', [
        animate(2000)
      ])])]
    
})
export class GreetComponent implements OnInit {
  @Input() playerName: string;
  userName: string = this.gameService.userName;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }
  getName(event) {
    this.gameService.userName = event.target.value;
    this.userName = event.target.value;
  }
}
