import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/interface/thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent {

  constructor(private httpClient: HttpClient){
  }

  thread$: Observable<Thread> = this.httpClient.get<Thread>("http://localhost:3000/thread/1");
  p: number = 1; // For ngx pagination 
}
