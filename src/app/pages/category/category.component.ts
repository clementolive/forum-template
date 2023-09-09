import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private http: HttpClient){

  }
  category$: Observable<any> = this.http.get("http://localhost:3000/category/1");

  moderators$: Observable<any> = this.http.get("http://localhost:3000/moderator");
  p: number = 1;
}
