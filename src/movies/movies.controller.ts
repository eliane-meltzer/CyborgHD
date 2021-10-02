import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Get()
    getMovies(): any {
        console.log("returning movies...");
        return this.moviesService.getMovies();
    }
    @Get('trending')
    getTrending(): any {
        return this.moviesService.getTrending();
    }

    @Get(':movieId')
    getMovie(@Param('movieId') movieId) {
        const movie = this.moviesService.getMovie(movieId);
        return movie;
    }

    @Get('search/:searchString')
    searchMovie(@Param('searchString') searchString) {
        console.log("search string...");
        const results = this.moviesService.searchMovies(searchString);
    }


}