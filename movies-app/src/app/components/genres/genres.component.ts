import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {mergeMap} from "rxjs/operators";
import {Movie} from "../../models/movie";
import {Genre} from "../../models/genre";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  id: number;
  movies: Array<Movie>;
  hasResults: boolean = false
  title: string = "Genre";

  constructor(private route: ActivatedRoute,
              private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => {
        this.id= Number(params.get('id'));
        this.lookupGenreTitle(this.id);
        return this.moviesService.getGetMoviesByGenre(this.id);
      }),
    ).subscribe((movies) => {
      this.movies = movies.results;
      this.hasResults = (this.movies.length != 0) ? true : false;
    });
  }

  lookupGenreTitle(genreId: number) {
    let genresList: Array<Genre>;
      this.moviesService.getGenres().subscribe((genres) => {
        genresList = genres.genres;
        let result = genresList.find(obj => {
          return obj.id === this.id;
        })
        this.title =  result.name;
     });
  }
}
