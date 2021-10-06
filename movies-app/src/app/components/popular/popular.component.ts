import { Component, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movie: Movie;
  title: string = "Popular";
  movies: Array<Movie>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    const movieSubs = this.moviesService.getPopularMovies().subscribe(
      movie => {
        this.movies = movie.results;
      });
  }

}
