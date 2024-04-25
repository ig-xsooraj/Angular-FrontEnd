import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  loginpage = this.fb.group({
    username: ['sooraj'],
    email: ['a@gmail.com'],
    password: []
  });

  ngOnInit(): void { }
}
