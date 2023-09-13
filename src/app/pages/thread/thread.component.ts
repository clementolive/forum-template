import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/interface/thread';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent {

  constructor(private httpClient: HttpClient, 
    private messageService: MessageService){
  }

  thread$: Observable<Thread> = this.messageService.getMessages();
  p: number = 1; // For ngx pagination 
}
