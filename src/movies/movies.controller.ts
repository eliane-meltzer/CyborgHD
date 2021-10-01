import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}
    @Get()
    getMovies(): any {
        return this.moviesService.getMovies();
    }
    @Get(':movieId')
    getMovie(@Param('movieId') movieId) {
        const movie = this.moviesService.getMovie(movieId);
        return movie;
    }
}