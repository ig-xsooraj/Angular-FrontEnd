import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root',
})
export class BookService implements OnInit {
  private booksDBurl = '';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getBookList(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(`${this.booksDBurl}`);
  }

  deleteBook(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.booksDBurl}/${id}`);
  }
}
