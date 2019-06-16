import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomerComponent} from './customer/customer.component';
import {RouterModule} from '@angular/router';
import {ItemComponent} from './item/item.component';
import {OrderComponent} from './order/order.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routs = [
  {path: 'customer', component: CustomerComponent, data: {page: 'one'}},
  {path: 'item', component: ItemComponent, data: {page: 'two'}},
  {path: 'order', component: OrderComponent, data: {page: 'three'}}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
