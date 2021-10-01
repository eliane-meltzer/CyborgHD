import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<any>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();
  }

}
