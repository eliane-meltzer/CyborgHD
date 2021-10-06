import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string;
  prefix: string = "movies";

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  public getNowPlaying(): Observable<any> {
    return this.http.get(this.baseUrl + this.prefix + '/now-playing');
  }

  public getTopRatedMovies(): Observable<any> {
    return this.http.get(this.baseUrl + this.prefix + '/toprated');
  }

  public getPopularMovies(): Observable<any> {
    return this.http.get(this.baseUrl + this.prefix + '/popular');
  }

  public getMovie(id: string): Observable<any> {
    return this.http.get(this.baseUrl + this.prefix + '/' + id);
  }

  public searchMovies(searchString: string): Observable<any> {
    return this.http.get(this.baseUrl + this.prefix + '/search/' + searchString);
  }

  public getGenres(): Observable<any> {
    return this.http.get(this.baseUrl + this.prefix + '/genres');
  }

  public getGetMoviesByGenre(genreId: number): Observable<any> {
    return this.http.get(this.baseUrl + this.prefix + '/genre/' + genreId);
  }

}
