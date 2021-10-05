import { Component, OnInit, ViewChildren } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie;

  movies: Array<Movie>;


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    const movieSubs = this.moviesService.getPopularMovies().subscribe(
      movie => {
        this.movies = movie.results;
        // this.generateSeo();

        if (!this.movies) {
          alert('Server Error')
        } else {
        }
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe() } }
    );
    // this.movie$ = this.moviesService.getMovie("6977")
    this.getMovie("6977");



  }

  getMovie(id) {
    const movieSubs = this.moviesService.getMovie(id).subscribe(
      movie => {
        this.movie = movie;
        // this.generateSeo();

        if (!this.movie) {
          alert('Server Error')
        } else {
        }
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe() } }
    );
  }

  convertRating(rating: number): number {
    return Math.round((rating/10)*100);
  }


}

