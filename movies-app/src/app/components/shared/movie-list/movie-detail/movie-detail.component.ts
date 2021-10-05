import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../../services/movies.service";
import {Movie} from "../../../../models/movie";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  convertRating(rating: number): number {
    return Math.round((rating/10)*100);
  }


  getMovie(id) {
    const movieSubs = this.moviesService.getMovie(id).subscribe(
      movie => {
        this.movie = movie;
        if (!this.movie) {
          alert('Server Error')
        } else {
        }
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe() } }
    );
  }

}
