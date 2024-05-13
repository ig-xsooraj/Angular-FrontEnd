import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../userprofile';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
  
export class LoginComponent implements OnInit {
  user: UserProfile = new UserProfile();
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userservice: UserServiceService
  ) {}
  ngOnInit(): void {
  }

  
  login() {
      alert("login successfull");
      this.goToEmployeeList();

  }

  goToEmployeeList() {
    this.router.navigate(['bookslist']);
  }
}
