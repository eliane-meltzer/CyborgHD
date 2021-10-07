import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Get('search/:searchString')
    searchMovies(@Param('searchString') searchString): any {
        return this.moviesService.searchMovies(searchString);
    }

    @Get('genre/:genreId')
    getMoviesByGenre(@Param('genreId') genreId): any {
        return this.moviesService.getMoviesByGenre(genreId);
    }

    @Get('now-playing')
    getNowPlaying(): any {
        return this.moviesService.getNowPlaying();
    }

    @Get('toprated')
    getTopRated(): any {
        return this.moviesService.getTopRated();
    }

    @Get('popular')
    getPopular(): any {
        return this.moviesService.getPopular();
    }

    @Get('genres')
    getGenres(): any {
        return this.moviesService.getGenres();
    }

    @Get(':movieId')
    getMovie(@Param('movieId') movieId): any {
        return this.moviesService.getMovie(movieId);
    }

}