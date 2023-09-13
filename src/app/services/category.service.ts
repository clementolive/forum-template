import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadList } from '../interface/thread-list';
import { HttpClient } from '@angular/common/http';
import { Moderators } from '../interface/moderators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getThreadList(): Observable<ThreadList>{
    return this.http.get<ThreadList>("https://my-json-server.typicode.com/clementolive/JSONServer_forum/threads");
  }

  public getModerators(): Observable<Moderators>{
    return this.http.get<Moderators>("https://my-json-server.typicode.com/clementolive/JSONServer_forum/moderators");
  }
}
