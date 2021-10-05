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
  movies: Array<Movie>;


  constructor(private searchService: SearchService,
              private movieService: MoviesService) {
    this.searchString = searchService.searchString;
    this.searchService.searchStringChange.pipe(
      mergeMap((searchString: string) => {
        return this.movieService.searchMovies(searchString);
      })
    ).subscribe((movies) => {
      this.movies = movies.results;
    });
  }

  ngOnInit(): void {

  }

}
