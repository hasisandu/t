import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Orders} from '../dto/Orders';


@Injectable({
  providedIn: 'root'
})
export class OrderrService {


  readonly baseUrl = environment.apiUrl + '/Order';

  constructor(private httpClient: HttpClient) {
  }

  getAllOrders(): Observable<Orders[]> {
    return this.httpClient.get<Orders[]>(this.baseUrl);
  }

  saveOrder(oredr: Orders) {
    return this.httpClient.post(this.baseUrl, {
      orderid: oredr.orderid, customerid: oredr.customerid, orderdate: oredr.orderdate,
      price: oredr.price
    });
  }

  updateOrder(oredr: Orders) {
    return this.httpClient.put(this.baseUrl, {
      orderid: oredr.orderid, customerid: oredr.customerid, orderdate: oredr.orderdate,
      price: oredr.price
    });
  }

  daleteOrder(id: string) {
    return this.httpClient.delete(this.baseUrl + '?orderid=' + id);
  }

}
