import {Component, OnInit} from '@angular/core';
import {ItemService} from '../service/item.service';
import {Items} from '../dto/Items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  Items: Items[] = [];
  newitemid;
  tempitemid = 'I1';
  serachid;
  itemname = '';
  discription = '';
  qtyonhand = '';
  unitprice = '';

  constructor(private itemservice: ItemService) {
  }

  setdata() {
    this.tempitemid = this.serachid;
    const tempItem: Items = this.Items.find(value => value.itemid === this.serachid);
    this.itemname = tempItem.itemname;
    this.discription = tempItem.discription;
    this.qtyonhand = tempItem.qtyonhand;
    this.unitprice = tempItem.unitprice;
  }

  setID() {
    this.tempitemid = this.newitemid;
    this.itemname = '';
    this.discription = '';
    this.qtyonhand = '';
    this.unitprice = '';
  }

  saveData() {
    this.itemservice.saveItem(new Items(this.tempitemid, this.itemname, this.discription, this.qtyonhand, this.unitprice))
      .subscribe(value => {
        if (value === null) {
          alert('Item Saved');


          this.itemservice.getAllItems().subscribe(customers => {
            this.Items = customers;
            const ItemId = this.Items[this.Items.length - 1];
            this.newitemid = +ItemId.itemid.slice(1) + 1;
            this.newitemid = 'I' + this.newitemid;
            this.tempitemid = this.newitemid;
          });

        }
      });
  }

  deleteData(temp) {
    const index = this.Items.indexOf(temp);
    this.Items.splice(index, 1);
    this.itemservice.daleteItem(temp.itemid).subscribe(result => {
      if (result === null) {
        alert('Item Deleted');


        this.itemservice.getAllItems().subscribe(customers => {
          this.Items = customers;
          const ItemID = this.Items[this.Items.length - 1];
          this.newitemid = +ItemID.itemid.slice(1) + 1;
          this.newitemid = 'I' + this.newitemid;
          this.tempitemid = this.newitemid;
        });

      }
    });
  }

  updateData() {
    this.itemservice.updateitem(new Items(this.tempitemid, this.itemname, this.discription, this.qtyonhand, this.unitprice))
      .subscribe(value => {
        if (value === null) {
          alert('Item Updated');


          this.itemservice.getAllItems().subscribe(customers => {
            this.Items = customers;
            const ItemID = this.Items[this.Items.length - 1];
            this.newitemid = +ItemID.itemid.slice(1) + 1;
            this.newitemid = 'I' + this.newitemid;
            this.tempitemid = this.newitemid;
          });

          this.itemname = '';
          this.discription = '';
          this.qtyonhand = '';
          this.unitprice = '';

        }
      });
  }



  ngOnInit() {
    this.itemservice.getAllItems().subscribe(customers => {
      this.Items = customers;
      const ItemID = this.Items[this.Items.length - 1];
      this.newitemid = +ItemID.itemid.slice(1) + 1;
      this.newitemid = 'I' + this.newitemid;
      this.tempitemid = this.newitemid;
    });
  }


}
