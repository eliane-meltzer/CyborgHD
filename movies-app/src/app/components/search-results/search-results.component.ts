import { Component, OnInit } from '@angular/core';
import {EMPTY} from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { mergeMap } from "rxjs/operators";
import { Movie } from "../../models/movie";
import { MoviesService } from "../../services/movies.service";
import { SearchService } from "../../services/search.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchString: string;
  hasResults: boolean = true;
  movies: Array<Movie>;
  title: string = "Search Results";

  constructor(private searchService: SearchService,
              private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.searchService.searchStringChange.pipe(
      mergeMap((searchString: string) => {
        this.searchString = this.searchService.searchString;
        if(this.searchService.searchString && searchString.length > 0)
          return this.movieService.searchMovies(this.searchString);
        else
          return EMPTY;
      })
    ).subscribe((movies) => {
      this.movies = movies.results;
      this.hasResults = (this.movies.length != 0 && this.searchString.length > 0) ? true : false;
    });
  }

}
