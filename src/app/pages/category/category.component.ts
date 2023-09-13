import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Moderators } from 'src/app/interface/moderators';
import { ThreadList } from 'src/app/interface/thread-list';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private http: HttpClient){

  }
  category$: Observable<ThreadList> = this.http.get<ThreadList>("https://my-json-server.typicode.com/clementolive/JSONServer_forum/threads");

  moderators$: Observable<Moderators> = this.http.get<Moderators>("https://my-json-server.typicode.com/clementolive/JSONServer_forum/moderators");
  p: number = 1; // For ngx pagination 
}
