import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import {SearchResultsComponent} from "./components/search-results/search-results.component";

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'search', component: SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
