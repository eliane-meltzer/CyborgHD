import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

/**
 * @file Service that stores and publishes the user-entered search string
 * @author Eliane Zalewski
 */

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
