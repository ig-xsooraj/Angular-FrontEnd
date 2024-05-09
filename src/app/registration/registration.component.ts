import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register() {
    try {
      alert("He's just unsuccessful.");
      this.router.navigate(['bookslist']);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  login() {
    try {
      this.router.navigate(['login']);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
