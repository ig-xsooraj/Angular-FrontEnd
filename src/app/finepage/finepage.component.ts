import { Component, OnInit } from '@angular/core';
import { Checkout } from '../checkout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finepage',
  templateUrl: './finepage.component.html',
  styleUrl: './finepage.component.css',
})
export class FinepageComponent implements OnInit {
  checkout: Checkout[] = [];
  id: number = 0;

  constructor(private aroute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
  }
}
