import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from "./services/search.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';

  constructor(private router: Router,
              private searchService: SearchService) {
  }

  public searchInput: string;


  onKeyPress(event) {
    console.log("onKeyPress - " + event.target.value.length);
    this.searchService.updateSearchString(event.target.value);
    if(this.router.url != "/search")
      this.router.navigateByUrl("/search");
    else if(event.key == 'Backspace' && event.target.value.length == 0) {
      this.router.navigateByUrl("/movies");
    }
  }

}

