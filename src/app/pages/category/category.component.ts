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
  category$: Observable<ThreadList> = this.http.get<ThreadList>("http://localhost:3000/category/1");

  moderators$: Observable<Moderators> = this.http.get<Moderators>("http://localhost:3000/moderator");
  p: number = 1; // For ngx pagination 
}
