import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {SearchResultsComponent} from "./components/search-results/search-results.component";
import {GenresComponent} from "./components/genres/genres.component";
import {PopularComponent} from "./components/popular/popular.component";
import {TopRatedComponent} from "./components/top-rated/top-rated.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchResultsComponent},
  { path: 'genres/:id', component: GenresComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'top-rated', component: TopRatedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
