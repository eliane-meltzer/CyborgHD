import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchString: string;

  searchStringChange: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor()  {
    this.searchStringChange.subscribe((value) => {
      this.searchString = value
    });
  }

  updateSearchString(search: string) {
    this.searchStringChange.next(search);
  }
}
