import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly baseUrl = environment.apiUrl + '/customerServelt';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl);
  }

  saveCustomers(customer: Customer) {
    return this.httpClient.post(this.baseUrl, {
      customerid: customer.cusid, firstname: customer.firstname, lastname: customer.lastname,
      address: customer.address
    });
  }

  updateCustomers(customer: Customer) {
    return this.httpClient.put(this.baseUrl, {
      customerid: customer.cusid, firstname: customer.firstname, lastname: customer.lastname,
      address: customer.address
    });
  }

  daleteCustomer(id: string) {
    return this.httpClient.delete(this.baseUrl + '?customerid=' + id);
  }

}
