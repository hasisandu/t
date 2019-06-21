import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Items} from '../dto/Items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly baseUrl = environment.apiUrl + '/Item';

  constructor(private httpClient: HttpClient) {
  }

  getAllItems(): Observable<Items[]> {
    return this.httpClient.get<Items[]>(this.baseUrl);
  }

  saveItem(item: Items) {
    return this.httpClient.post(this.baseUrl, {
      itemid: item.itemid, itemname: item.itemname, discription: item.discription,
      qtyonhand: item.qtyonhand, unitprice: item.unitprice
    });
  }

  updateitem(item: Items) {
    return this.httpClient.put(this.baseUrl, {
      itemid: item.itemid, itemname: item.itemname, discription: item.discription,
      qtyonhand: item.qtyonhand, unitprice: item.unitprice
    });
  }

  daleteItem(id: string) {
    return this.httpClient.delete(this.baseUrl + '?itemid=' + id);
  }

}
