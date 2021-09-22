import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../IUser';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {
  modal = false;
  @Input() user!: IUser;
  @Output() orders = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  modalView(user: any): void{
    this.modal = !this.modal;
    this.orders.emit(user);
    }

  }

