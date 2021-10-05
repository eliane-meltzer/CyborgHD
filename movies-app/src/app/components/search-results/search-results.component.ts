import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Movie} from "../../models/movie";
import {flatMap} from "tslint/lib/utils";
import {mergeMap, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MoviesService} from "../../services/movies.service";


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
        return this.movieService.searchMovies(searchString);
      })
    ).subscribe((movies) => {
      this.movies = movies.results;
      this.hasResults = (this.movies.length != 0 && this.searchString.length > 0) ? true : false;
    });
  }
}
