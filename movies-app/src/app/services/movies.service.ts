import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from '@angular/core';
import { Observable } from "rxjs";
import {WINDOW} from "../window-token";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  origin = this.window.location.hostname;
  baseUrl: string;
  prefix: string = "movies";

  constructor(
    private http: HttpClient,
    @Inject(WINDOW) private window: Window
  ) {
    this.baseUrl = 'http://' + this.origin + ':3000/api/';
    console.log("baseurl: " + this.baseUrl)
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
