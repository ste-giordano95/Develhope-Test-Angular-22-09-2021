import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersCardComponent } from './users/users-card/users-card.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { OrdersComponent } from './users/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersCardComponent,
    UsersListComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
