import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';
import { Checkout } from './checkout';

@Injectable({
  providedIn: 'root',
})
export class BookService implements OnInit {
  private booksDBurl = 'http://localhost:8080/api/books/';
  private checkouturl =
    "http://localhost:8080/api/users/getCheckout";
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {}

  getBookListSource(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(`${this.booksDBurl}` + 'add');
  }

  deleteBook(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.booksDBurl}/${id}`);
  }

  fineAmount(bookId: Number, serialNumber: string): Observable<Checkout> {
    return this.httpClient.get<Checkout>(`${this.checkouturl}`);
  }
}
