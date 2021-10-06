import { Component, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  movie: Movie;
  title: string = "Top Rated";
  movies: Array<Movie>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    const movieSubs = this.moviesService.getTopRatedMovies().subscribe(
      movie => {
        this.movies = movie.results;
      });
  }

}
