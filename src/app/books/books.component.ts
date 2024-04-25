import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: Books[] | undefined;
  constructor(private bookservice: BookService) {}
  ngOnInit(): void {
    this.getBookList();

    // Static data to displayed on the UI;
    this.books = [
      { bookid: 1, bookname: 'c++', author: 'abc' },
      { bookid: 2, bookname: 'pyhton', author: 'zyx' },
    ];
  }

  private getBookList() {
    try {
      this.bookservice.getBookList().subscribe(data => {
        this.books = data;
      })
    
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
  

