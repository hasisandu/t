import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../dto/Customer';
import {Items} from '../dto/Items';
import {ItemService} from '../service/item.service';
import {Orders} from '../dto/Orders';
import {OrderrService} from '../service/orderr.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  customerid = '';
  Dupcustomerid = '';
  customername = '';
  customeradress = '';
  Customers: Customer[] = [];
  items: Items[] = [];
  order: Orders[] = [];
  orders: Orders[] = [];

  itemid = '';
  Dupitemid = '';
  itemname = '';
  Dupitemname = '';
  discribe = '';
  Dupdiscribe = '';
  qtyonhand = '';
  Dupqtyonhand = '';
  price = '';
  Dupprice = '';
  neworderid;
  temporderid;
  qty;
  total = 0;

  constructor(private customerservice: CustomerService, private itemService: ItemService, private orderservice: OrderrService) {
  }

  setCusData() {
    const customer = this.Customers.find(value => value.cusid === this.customerid);

    this.customername = customer.lastname + ' ' + customer.lastname;
    this.customeradress = customer.address;

  }

  setItemData() {
    const item = this.items.find(value => value.itemid === this.itemid);
    console.log(item);
    this.itemname = item.itemname;
    this.discribe = item.discription;
    this.price = item.unitprice;
    this.qtyonhand = item.qtyonhand;
  }

  addOrder() {
    this.order.push(new Orders(this.neworderid, this.customerid, new Date() + '', this.price));
    const x = this.qty;
    const y = this.price;
    const total = x * y;
    this.total = this.total + total;
    console.log(this.total);

    this.Dupitemid = this.itemid;
    this.Dupdiscribe = this.discribe;
    this.Dupitemname = this.itemname;
    this.Dupcustomerid = this.customerid;
    this.Dupprice = this.price;


    this.itemname = '';
    this.discribe = '';
    this.price = '';
    this.qtyonhand = '';
    this.itemid = '';

    this.customername = '';
    this.customeradress = '';
    this.customerid = '';

    // this.total = (+this.total) + (+this.qty) * (+this.price);
    // console.log(this.total);
  }

  remove(orderid) {

  }

  ngOnInit() {
    this.customerservice.getAllCustomers().subscribe(result => {
      this.Customers = result;
    });

    this.itemService.getAllItems().subscribe(result => {
      this.items = result;
    });

    this.orderservice.getAllOrders().subscribe(orders => {
      this.orders = orders;
      console.log(orders);
      const orderID = this.orders[this.orders.length - 1];
      this.neworderid = +orderID.orderid.slice(1) + 1;
      this.neworderid = 'E' + this.neworderid;
      this.temporderid = this.neworderid;

    });
  }

}
