import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';

  }

  public getTrendingMovies(): Observable<any> {
    return this.http.get(this.baseUrl + 'movies/trending');
  }

  public getTopRatedMovies(): Observable<any> {
    return this.http.get(this.baseUrl + 'movies/toprated');
  }

  public getPopularMovies(): Observable<any> {
    return this.http.get(this.baseUrl + 'movies/popular');
  }

  public getMovie(id: string): Observable<any> {
    console.log(this.baseUrl + 'movies/' + id);
    return this.http.get(this.baseUrl + 'movies/' + id);
  }
}
