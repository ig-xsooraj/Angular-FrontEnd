import { Component, OnInit } from '@angular/core';
import { Checkout } from '../checkout';
import { BookService } from '../books.service';
import { Books } from '../books';

@Component({
  selector: 'app-finepage',
  templateUrl: './finepage.component.html',
  styleUrl: './finepage.component.css',
})
export class FinepageComponent implements OnInit {
  check: Checkout[] = [];
  id: number = 0;
  serial: string = '';
  books:Books[] = [];

  constructor(private bookservices: BookService) {}

  ngOnInit(): void {
    this.getfine();
  }

  getfine() {
    this.bookservices.fineAmount(this.id, this.serial).subscribe((data) => {
      this.check = data as unknown as Checkout[];
    });
  }

  getBookList() {
    this.bookservices.getBookListSource().subscribe((data) => {
      this.books = data;
    });
  }
}
