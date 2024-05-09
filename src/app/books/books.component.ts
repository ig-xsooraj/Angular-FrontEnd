import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: Books[] = [];
  data: any;
  id: any;
  searchText: string = '';


  filteredData: Books[] = this.books;

  
  constructor(
    private bookservice: BookService,
    private aroute: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.getBookList();
    //
    this.books = [
      {
        bookid: 1,
        bookname: 'C++',
        author: 'c++',
      },
    ];
    this.filteredData = this.books;
  }

  private getBookList() {
    try {
      this.bookservice.getBookList().subscribe((data) => {
        this.books = data;
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  delete(id: number) {
    alert('book removed successfully');
    this.bookservice.deleteBook(id).subscribe((data) => {
      console.log(this.data);
      this.getBookList();
    });

    throw new Error('Method not implemented.');
  }

  search() {
    try {
      this.filteredData = this.books.filter((item) =>
        item.bookname.toLowerCase().includes(this.searchText.toLowerCase())
      );
      alert('seraching your books');
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
