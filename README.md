# Cyborg HD

## Description
Cyborg HD is an [Angular](https://angular.io)/[NestJS](https://nestjs.com/) app that allows users to browse and search for movies using data provided by [The Movie Database](https://www.themoviedb.org/documentation/api?language=en-US)'s (TMDB) API.

Figma mockups are accessible [here](https://www.figma.com/file/CAT1QVcPWMCv7bK53AEYml/Cyborg-HD-Mockups?node-id=0%3A86).

Trello Board is accessible [here](https://trello.com/b/KojtWI8M/movie-database).
  

## Versions
This project was developed using the following:
- Angular CLI: 12.2.8
- Node: 12.16.1
- Package Manager: npm 6.13.4
- NestJS 8.1.2
- The Movie Database 3.0

## Installation

```bash
$ git clone https://github.com/elzalewski/CyborgHD
$ cd CyborgHD
$ npm install

```

## Dependencies
 Because this project fetches its movie data from TMDB, a TMDB API key is required.
 Register for your own key [here](https://developers.themoviedb.org/3/getting-started/introduction) and store it as the value for `API_KEY` in `CyborgHD/.env`

## Running the app
```bash
# start back-end (from project root)
$ cd src
$ npm run start
# NestJS server will be running on port 3000

# start front-end
$ cd ../movies-app
$ npm start
# front-end will be accessible at http://localhost:4200/ 
```

## Test
```bash
#coming soon
```

## Support
[Swagger](https://swagger.io/) API Docs are accessible at  http://localhost:3000/api/ when the NestJS server is running. 

## Project Status
The front-end and back-end functionality of the app is complete. E2E testing, unit testing, and CI/CD are still in progress.

## License
This project is [MIT licensed](LICENSE).
