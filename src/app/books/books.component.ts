import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: Books[] = [];
  id: any;
  searchText: string = '';

  filteredData: Books[] = this.books;

  constructor(private bookservice: BookService, private route: Router) {}

  ngOnInit(): void {
    this.getBookList();

    this.books = [
      {
        "bookid":1,
        "booktitle": "Pyhton",
        "author":"Python"
      }
    ]
  }

  getBookList() {
    this.bookservice.getBookListSource().subscribe((data) => {
      this.books = data;
    });
  }

  add() {
    throw new Error('Method not implemented.');
  }
  search() {
    throw new Error('Method not implemented.');
  }
  delete() {
    throw new Error('Method not implemented.');
  }
}
