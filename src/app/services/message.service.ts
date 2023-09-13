import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '../interface/thread';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient : HttpClient ) {}

  public getMessages(): Observable<Thread>{
      return this.httpClient.get<Thread>("https://my-json-server.typicode.com/clementolive/JSONServer_forum/messages");
  }

}
