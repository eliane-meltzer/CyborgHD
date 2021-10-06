import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() title: string;
  @Input() movies: Array<Movie>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  viewMovieDetails(movie: Movie): void {
    const dialogRef = this.dialog.open(MovieDetailComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: '700px',
      height: 'auto',
      data: {movie: movie}
    });
  }

}
