import { Component,Input, OnInit } from '@angular/core';
import { IUser } from '../IUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() user!: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
