import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() title: string;
  @Input() movies: Array<Movie>;



  constructor() { }

  ngOnInit(): void {
  }

}
