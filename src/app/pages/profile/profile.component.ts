import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private http: HttpClient){

  }


    profile$: Observable<any> = this.http.get("http://localhost:3000/profile/1");
}
