import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class MoviesService {
    constructor(private httpService: HttpService) {}

    getMovie(movieId): any {
        let id = Number(movieId);
        return this.httpService.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + process.env.API_KEY + '&language=en-US', {
                    headers: {
                        'Accept': 'application/json'
                    }
                }).pipe(
                map(response => response.data), catchError(e => {
                    throw new HttpException(e.response.data, e.response.status);
            }));
    }

    searchMovies(searchString: String): any {
        searchString.replace(" ", "%20");
        console.log('https://api.themoviedb.org/3/search/movie?api_key='+ process.env.API_KEY +'&language=en-US&query=' + searchString + '&page=1&include_adult=false');
        return this.httpService.get('https://api.themoviedb.org/3/search/movie?api_key='+ process.env.API_KEY +'&language=en-US&query=' + searchString + '&page=1&include_adult=false', {
                headers: {
                    'Accept': 'application/json'
                }
            }).pipe(
            map(response => response.data), catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }));
    }

    getTopRated(): any {
        return this.httpService.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.API_KEY
            , {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map(response => response.data), catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }));
    }

    getPopular(): any {
        return this.httpService.get('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.API_KEY
            , {
                headers: {
                    'Accept': 'application/json'
                }
            }).pipe(
            map(response => response.data), catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }));
    }

    getGenres(): any {
        return this.httpService.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.API_KEY + '&language=en-US'
            , {
                headers: {
                    'Accept': 'application/json'
                }
            }).pipe(
            map(response => response.data), catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }));
    }

    getMoviesByGenre(genreId): any {
        let id = Number(genreId);
        console.log("get by genre :) ");
        return this.httpService.get('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.API_KEY +'&with_genres=' + genreId
            , {
                headers: {
                    'Accept': 'application/json'
                }
            }).pipe(
            map(response => response.data), catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }));
    }
}
