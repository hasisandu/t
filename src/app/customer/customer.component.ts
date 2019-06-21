import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../dto/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  Customers: Customer[] = [];
  newcustomerid;
  tempcusid = 'C1';
  serachid;
  firstname = '';
  lastname = '';
  address = '';

  constructor(private customerservice: CustomerService) {
  }

  setdata() {
    this.tempcusid = this.serachid;
    const tempcutomer: Customer = this.Customers.find(value => value.cusid === this.serachid);
    this.firstname = tempcutomer.firstname;
    this.lastname = tempcutomer.lastname;
    this.address = tempcutomer.address;
  }

  setID() {
    this.tempcusid = this.newcustomerid;
    this.firstname = '';
    this.lastname = '';
    this.address = '';
  }

  saveData() {
    this.customerservice.saveCustomers(new Customer(this.tempcusid, this.firstname, this.lastname, this.address)).subscribe(value => {
      if (value === null) {
        alert('Customer Saved');


        this.customerservice.getAllCustomers().subscribe(customers => {
          this.Customers = customers;
          const Customerid = this.Customers[this.Customers.length - 1];
          this.newcustomerid = +Customerid.cusid.slice(1) + 1;
          this.newcustomerid = 'C' + this.newcustomerid;
          this.tempcusid = this.newcustomerid;
        });

      }
    });
  }

  deleteData(temp) {
    const index = this.Customers.indexOf(temp);
    this.Customers.splice(index, 1);
    this.customerservice.daleteCustomer(temp.cusid).subscribe(result => {
      if (result === null) {
        alert('Customer Deleted');


        this.customerservice.getAllCustomers().subscribe(customers => {
          this.Customers = customers;
          const Customerid = this.Customers[this.Customers.length - 1];
          this.newcustomerid = +Customerid.cusid.slice(1) + 1;
          this.newcustomerid = 'C' + this.newcustomerid;
          this.tempcusid = this.newcustomerid;
        });

      }
    });
  }

  updateData() {
    this.customerservice.updateCustomers(new Customer(this.tempcusid, this.firstname, this.lastname, this.address)).subscribe(value => {
      if (value === null) {
        alert('Customer Updated');


        this.customerservice.getAllCustomers().subscribe(customers => {
          this.Customers = customers;
          const Customerid = this.Customers[this.Customers.length - 1];
          this.newcustomerid = +Customerid.cusid.slice(1) + 1;
          this.newcustomerid = 'C' + this.newcustomerid;
          this.tempcusid = this.newcustomerid;
        });

        this.firstname = '';
        this.lastname = '';
        this.address = '';

      }
    });
  }



  ngOnInit() {
    this.customerservice.getAllCustomers().subscribe(customers => {
      this.Customers = customers;
      const Customerid = this.Customers[this.Customers.length - 1];
      this.newcustomerid = +Customerid.cusid.slice(1) + 1;
      this.newcustomerid = 'C' + this.newcustomerid;
      this.tempcusid = this.newcustomerid;
    });
  }

}
