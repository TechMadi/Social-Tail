import { IUser } from './../models/user.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  private _user = new BehaviorSubject<IUser>({
    email: '',
  });
  constructor(private http: HttpClient) {}

  createUser(user: { email: string; password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${environment.server_url}users`, user);
  }
}
