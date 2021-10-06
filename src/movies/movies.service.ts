import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { catchError, map } from "rxjs/operators";

/**
 * @file Service that retrieves movie-related data using The MovieDB's api
 * @author Eliane Zalewski
 */

@Injectable()
export class MoviesService {
    constructor(private httpService: HttpService) {}


    /**
     * Retrieves movie based on movieId from The MovieDB
     * @author Eliane Zalewski
     * @param {string} movieId - Id of the movie
     * @returns {json} - Movie
     */
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

    /**
     * Retrieves all movie matches for searchString from The MovieDB
     * @author Eliane Zalewski
     * @param {string} searchString - String to search
     * @returns {json} - Search matches
     */
    searchMovies(searchString: String): any {
        searchString.replace(" ", "%20");
        return this.httpService.get('https://api.themoviedb.org/3/search/movie?api_key='+ process.env.API_KEY +'&language=en-US&query=' + searchString + '&page=1&include_adult=false', {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
        map(response => response.data), catchError(e => {
            throw new HttpException(e.response.data, e.response.status);
        }));
    }

    /**
     * Retrieves top rated movies from The MovieDB
     * @author Eliane Zalewski
     * @returns {json} - Top rated movies
     */
    getTopRated(): any {
        return this.httpService.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.API_KEY, {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map(response => response.data), catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }));
    }

    /**
     * Retrieves now playing movies from The MovieDB
     * @author Eliane Zalewski
     * @returns {json} - Now playing movies
     */
    getNowPlaying(): any {
        return this.httpService.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + process.env.API_KEY, {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
        map(response => response.data), catchError(e => {
            throw new HttpException(e.response.data, e.response.status);
        }));
    }

    /**
     * Retrieves popular movies from The MovieDB
     * @author Eliane Zalewski
     * @returns {json} - Popular movies
     */
    getPopular(): any {
        return this.httpService.get('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.API_KEY, {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
        map(response => response.data), catchError(e => {
            throw new HttpException(e.response.data, e.response.status);
        }));
    }

    /**
     * Retrieves all genres from The MovieDB
     * @author Eliane Zalewski
     * @returns {json} - Genres
     */
    getGenres(): any {
        return this.httpService.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.API_KEY + '&language=en-US', {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
        map(response => response.data), catchError(e => {
            throw new HttpException(e.response.data, e.response.status);
        }));
    }

    /**
     * Retrieves genre based on genreId from The MovieDB
     * @author Eliane Zalewski
     * @param {string} genreId - Id of genre
     * @returns {json} - Genre
     */
    getMoviesByGenre(genreId): any {
        return this.httpService.get('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.API_KEY +'&with_genres=' + genreId, {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
        map(response => response.data), catchError(e => {
            throw new HttpException(e.response.data, e.response.status);
        }));
    }

}
