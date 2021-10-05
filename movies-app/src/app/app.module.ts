import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MovieDetailComponent } from './components/shared/movie-list/movie-detail/movie-detail.component';
import { PopularComponent } from './components/popular/popular.component';
import { GenresComponent } from './components/genres/genres.component';
import { MovieListComponent } from './components/shared/movie-list/movie-list.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    MovieDetailComponent,
    PopularComponent,
    GenresComponent,
    MovieListComponent,
    TopRatedComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
