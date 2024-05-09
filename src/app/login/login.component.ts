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

  constructor(
    private router: Router,
    private userservice: UserServiceService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  saveUser() {
    // this.userservice.createUser(this.user).subscribe(
    //   (data) => {
    //     console.log(data)
    //     this.goToEmployeeList();
    //   },
    //   error => console.log(error));

    this.router.navigate(['bookslist']);
  }

  goToEmployeeList() {
    this.router.navigate(['bookslist']);
  }

  onSubmit() {
    console.log(this.user);

    this.saveUser();
    this.router.navigate(['bookslist']);
  }
}
