import { MoviesController } from './movies.controller';
import { Test, TestingModule } from '@nestjs/testing';
import {MoviesService} from "./movies.service";
import {genreStub, movieStub} from "./movie.stub";

describe('MoviesController', () => {
  let controller: MoviesController;

  const mockMoviesService = {
    getGenres: jest.fn(() => {
      return {"genres":[genreStub]};
    }),
    getMovie: jest.fn((id) => {
      return movieStub;
    }),
    getNowPlaying: jest.fn(() => {
      return {"page":1,"results":[movieStub]};
    }),
    getPopular: jest.fn(() => {
      return {"page":1,"results":[movieStub]};
    }),
    getTopRated: jest.fn(() => {
      return {"page":1,"results":[movieStub]};
    }),
    searchMovies: jest.fn((searchTerm) => {
      return {"page":1,"results":[movieStub]};
    }),
    getMoviesByGenre: jest.fn((searchTerm) => {
      return {"page":1,"results":[movieStub]};
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    })
        .overrideProvider(MoviesService)
        .useValue(mockMoviesService)
        .compile();

    controller = module.get<MoviesController>(MoviesController);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('it should get a genre', () => {
    expect(controller.getGenres()).toEqual( {"genres":[genreStub]});
    expect(mockMoviesService.getGenres).toHaveBeenCalled();
  });

  it('it should get a movie', () => {
    expect(controller.getMovie(1)).toEqual(movieStub);
    expect(mockMoviesService.getMovie).toHaveBeenCalled();
  });

  it('it should get search results', () => {
    expect(controller.searchMovies("Mock")).toEqual({
      "page":1,"results": [movieStub]});
    expect(mockMoviesService.searchMovies).toHaveBeenCalled();
  });

  it('it should get top rated movies', () => {
    expect(controller.getTopRated()).toEqual({
      "page":1,"results": [movieStub]});
    expect(mockMoviesService.getTopRated).toHaveBeenCalled();
  });

  it('it should get popular movies', () => {
    expect(controller.getPopular()).toEqual({
      "page":1,"results": [movieStub]});
    expect(mockMoviesService.getPopular).toHaveBeenCalled();
  });

  it('it should get now playing movies', () => {
    expect(controller.getNowPlaying()).toEqual({
      "page":1,"results": [movieStub]});
    expect(mockMoviesService.getNowPlaying).toHaveBeenCalled();
  });

  it('it should get movies by genre', () => {
    expect(controller.getMoviesByGenre(28)).toEqual({
      "page":1,"results": [movieStub]});
    expect(mockMoviesService.getMoviesByGenre).toHaveBeenCalled();
  });
});
