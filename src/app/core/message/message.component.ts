import { Component, Input } from '@angular/core';
import { Message } from 'src/app/interface/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input()
  msg!: Message;

}
