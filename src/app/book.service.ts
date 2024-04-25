import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = "libraryManagmentsrcassets/bookDB.json";
  constructor(private httpClient: HttpClient) {}

  getBookList(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(`${this.baseUrl}`);
  }
}
