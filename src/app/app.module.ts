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
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from './service/customer.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemService} from './service/item.service';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {OrderrService} from './service/orderr.service';

const routs = [
  {path: 'customer', component: CustomerComponent, data: {page: 'one'}},
  {path: 'item', component: ItemComponent, data: {page: 'two'}},
  {path: 'order', component: OrderComponent, data: {page: 'three'}},
  {path: 'placeOrder', component: PlaceOrderComponent, data: {page: 'fore'}}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routs),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerService,
    ItemService,
    OrderrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
