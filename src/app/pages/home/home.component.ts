import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  category = [
    {title: "Informations", content: ["News", "Announcements"]},
    {title: "Gameplay", content: ["Support", "Bugs", "General discussions"]},
    {title: "Community", content: ["Discussions", "Misc", "Games"]},
    {title: "Universes", content: ["Gaïa", "Terra", "Helios", "Opera"]}
  ];

}
