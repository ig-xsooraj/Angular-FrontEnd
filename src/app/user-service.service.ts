import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from './userprofile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private userDbUrl = '';
  constructor(private http: HttpClient) {}

  getUser(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.userDbUrl}`);
  }
  // this. mehtod to post the data in db
  createUser(user: UserProfile): Observable<object> {
    return this.http.post(`${this.userDbUrl}`, user);
  }

  //this method is to get the user by the id
  getUserByID(id: number, user: UserProfile): Observable<object> {
    return this.http.get(`${this.userDbUrl}/${id}`);
  }
}
