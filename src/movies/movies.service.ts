import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class MoviesService {
    constructor(private httpService: HttpService) {}

    movies = [
        { id: 1, title: 'The Notebook', description: "Josh's favorite movie", year: '2010', rating: 4.9 },
        { id: 2, title: 'Pride and Prejudice', description: "El's favorite movie", year: '2020', rating: 4.0 },
        { id: 3, title: 'The Secret Life of Walter Mitty', description: "Rachelle's favorite movie", year: '1995', rating: 4.6},
    ];

    getMovies(): any {
        return this.movies;
    }
    getMovie(movieId): any {
        let id = Number(movieId);
        let response = this.httpService.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + process.env.API_KEY + '&language=en-US', {
                    headers: {
                        'Accept': 'application/json'
                    }
                }).pipe(
                map(response => response.data), catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }));
        return response;
    }

    searchMovies(searchString: String): any {
        console.log("search movies");
        searchString.replace(" ", "%20");
        console.log('https://api.themoviedb.org/3/search/movie?api_key='+ process.env.API_KEY +'&language=en-US&query=' + searchString + '&page=1&include_adult=false');
        return this.httpService.get('https://api.themoviedb.org/3/search/movie?api_key='+ process.env.API_KEY +'&language=en-US&query=' + searchString + '&page=1&include_adult=false', {
                headers: {
                    'Accept': 'application/json'
                }
            }).pipe(
            map(response => response),
        );
    }


    getTrending(): any {
        console.log("inGetTrending");
        return this.httpService.get('https://api.themoviedb.org/3/trending/movie/week?api_key=' + process.env.API_KEY
            , {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map(response => response.data),
        );
    }
}
