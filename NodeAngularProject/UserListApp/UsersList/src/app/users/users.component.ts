import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  constructor() { }
  //users.component.ts and app.component.ts is having child-parent relationship
  //So will be sending users from app.component.ts
  @Input() users!: any[];


}
