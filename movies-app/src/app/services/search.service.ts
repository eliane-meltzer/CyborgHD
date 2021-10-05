import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchString: string;

  searchStringChange: Subject<string> = new Subject<string>();

  constructor()  {
    this.searchStringChange.subscribe((value) => {
      this.searchString = value
    });
  }

  updateSearchString(search: string) {
    console.log("updateSearchString: " + search);
    this.searchStringChange.next(search);
  }
}
