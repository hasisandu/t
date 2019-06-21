import {Component, OnInit} from '@angular/core';

import {Orders} from '../dto/Orders';
import {OrderrService} from '../service/orderr.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  orders: Orders[] = [];
  neworderid;
  temporderid = 'E1';
  serachid;
  cusid = '';
  orderdate = '';
  price = '';

  constructor(private orderservice: OrderrService) {
  }

  setdata() {
    this.temporderid = this.serachid;
    const temporder: Orders = this.orders.find(value => value.orderid === this.serachid);
    this.cusid = temporder.customerid;
    this.orderdate = temporder.orderdate;
    this.price = temporder.price;
  }

  setID() {
    this.temporderid = this.neworderid;
    this.cusid = '';
    this.orderdate = '';
    this.price = '';
  }

  saveData() {
    this.orderservice.saveOrder(new Orders(this.temporderid, this.cusid, this.orderdate, this.price))
      .subscribe(value => {
        if (value === null) {
          alert('Order Saved');


          this.orderservice.getAllOrders().subscribe(orders => {
            this.orders = orders;
            const orderID = this.orders[this.orders.length - 1];
            this.neworderid = +orderID.orderid.slice(1) + 1;
            this.neworderid = 'E' + this.neworderid;
            this.temporderid = this.neworderid;
          });

        }
      });
  }

  deleteData(temp) {
    const index = this.orders.indexOf(temp);
    this.orders.splice(index, 1);
    this.orderservice.daleteOrder(temp.orderid).subscribe(result => {
      if (result === null) {
        alert('Order Deleted');


        this.orderservice.getAllOrders().subscribe(orders => {
          this.orders = orders;
          const orderID = this.orders[this.orders.length - 1];
          this.neworderid = +orderID.orderid.slice(1) + 1;
          this.neworderid = 'E' + this.neworderid;
          this.temporderid = this.neworderid;
        });

      }
    });
  }

  updateData() {
    this.orderservice.updateOrder(new Orders(this.temporderid, this.cusid, this.orderdate, this.price))
      .subscribe(value => {
        if (value === null) {
          alert('Order Updated');


          this.orderservice.getAllOrders().subscribe(orders => {
            this.orders = orders;
            const orderID = this.orders[this.orders.length - 1];
            this.neworderid = +orderID.orderid.slice(1) + 1;
            this.neworderid = 'E' + this.neworderid;
            this.temporderid = this.neworderid;
          });

          this.cusid = '';
          this.orderdate = '';
          this.price = '';

        }
      });
  }



  ngOnInit() {
    this.orderservice.getAllOrders().subscribe(orders => {
      this.orders = orders;
      const orderID = this.orders[this.orders.length - 1];
      this.neworderid = +orderID.orderid.slice(1) + 1;
      this.neworderid = 'E' + this.neworderid;
      this.temporderid = this.neworderid;
    });
  }
}
