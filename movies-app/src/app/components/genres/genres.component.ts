import { ActivatedRoute, ParamMap } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Genre } from "../../models/genre";
import { mergeMap } from "rxjs/operators";
import { Movie } from "../../models/movie";
import { MoviesService } from "../../services/movies.service";

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
    // uses id url param to fetch genre data
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

  /**
   * Looks up genre name by genre id and assigns it to this.title
   * @author   El
   * @param    genreId
   */
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
