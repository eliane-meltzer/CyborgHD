import {HttpException, Injectable} from '@nestjs/common';

@Injectable()
export class MoviesService {
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
        return new Promise(resolve => {
            const movie = this.movies.find(movie => movie.id === id);
            if (!movie) {
                throw new HttpException('Movie does not exist', 404)
            }
            resolve(movie);
        });
    }
}
