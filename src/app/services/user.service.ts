import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient ) { }

  public getUser(): Observable<User>{
    return this.httpClient.get<User>("https://my-json-server.typicode.com/clementolive/JSONServer_forum/profile");
  }
}
