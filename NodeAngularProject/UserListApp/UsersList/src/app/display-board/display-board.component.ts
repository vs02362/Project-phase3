import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent  {

  constructor() { }
  //display-board.component.ts and app.component.ts is having child-parent relationship
  //So will be sending userCount from app.component.ts

  @Input() userCount = 0;
  @Output() getUsersEvent = new EventEmitter();

  ngOnInit(): void {
  }

  getAllUsers() {
    this.getUsersEvent.emit('get all users');
  }

}
