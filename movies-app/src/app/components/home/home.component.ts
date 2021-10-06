import { Component, OnInit, ViewChildren } from '@angular/core';
import { Movie } from "../../models/movie";
import { MovieListComponent } from "../shared/movie-list/movie-list.component";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movie: Movie;
  title: string = "New Arrivals";
  movies: Array<Movie>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe(
      movie => {
        this.movies = movie.results;
      });
  }

}

