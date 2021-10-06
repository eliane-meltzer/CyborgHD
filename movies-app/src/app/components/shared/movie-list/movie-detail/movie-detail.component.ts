import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Movie } from "../../../../models/movie";
import { MoviesService } from "../../../../services/movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  movieGenres: Array<string> = [];

  constructor(
    public dialogRef: MatDialogRef<MovieDetailComponent>,
    private moviesService: MoviesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe(
      genres => {
        this.data.movie.genre_ids.forEach(movieGenre => {
          let result = genres.genres.find(genreCategory => {
            return movieGenre === genreCategory.id;
          });
          if(result) {
            this.movieGenres.push(result.name);
          }
        });
      });
  }

  convertRating(rating: number): number {
    return Math.round((rating/10)*100);
  }

  getReleaseYear(releaseDate: string) : string {
    return releaseDate.substring(0,4);
  }

}
