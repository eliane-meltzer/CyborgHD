import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from "./services/search.service";
import {MoviesService} from "./services/movies.service";
import {Genre} from "./models/genre";


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
        if (!this.genres) {
          console.error("Server error - Could not fetch genres")
        }
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe() } }
    );
  }

  doSearch(event) {
    this.searchService.updateSearchString(event.target.value);
    if(this.router.url != "/search")
      this.router.navigateByUrl("/search");
    else if(event.key == 'Backspace' && event.target.value.length == 0) {
      this.router.navigateByUrl("/home");
    }
  }

}

