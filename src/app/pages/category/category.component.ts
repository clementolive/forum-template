import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Moderators } from 'src/app/interface/moderators';
import { ThreadList } from 'src/app/interface/thread-list';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private http: HttpClient, 
    private categoryService: CategoryService){

  }
  category$: Observable<ThreadList> = this.categoryService.getThreadList();

  moderators$: Observable<Moderators> = this.categoryService.getModerators();
  p: number = 1; // For ngx pagination 
}
