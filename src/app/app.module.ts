import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomerComponent} from './customer/customer.component';
import {RouterModule} from '@angular/router';

const routs = [
  {path: 'customer', component: CustomerComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
