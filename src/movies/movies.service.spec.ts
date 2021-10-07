import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { HttpService } from "@nestjs/axios";


describe('MoviesService', () => {
  let service: MoviesService;

  const mockHttpService = {
    // getMovie: jest.fn().mockImplementation(() => stubMovie),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService,
        { provide: HttpService, useValue: mockHttpService },
      ],}).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
