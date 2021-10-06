import { Component } from '@angular/core';
import { Genre } from "./models/genre";
import { MoviesService } from "./services/movies.service";
import { Router } from '@angular/router';
import { SearchService } from "./services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  genres: Array<Genre>;

  constructor(private router: Router,
              private searchService: SearchService,
              private moviesService: MoviesService) {

    const movieSubs = this.moviesService.getGenres().subscribe(
      genres => {
        this.genres = genres.genres;
      });
  }

  /**
   * Update search string and navigation based on user input
   * @author Eliane Zalewski
   * @param {$event} event - User keypress event
   */
  doSearch(event) {
    this.searchService.updateSearchString(event.target.value);
    if(this.router.url != "/search")
      this.router.navigateByUrl("/search");
    else if(event.key == 'Backspace' && event.target.value.length == 0) {
      this.router.navigateByUrl("/home");
    }
  }

}

