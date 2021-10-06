import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenresComponent } from './components/genres/genres.component';
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetailComponent } from './components/shared/movie-list/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/shared/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { PopularComponent } from './components/popular/popular.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieListComponent,
    PopularComponent,
    SearchResultsComponent,
    TopRatedComponent,
  ],
  imports: [
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
