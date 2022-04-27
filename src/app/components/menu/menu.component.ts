import { Component } from '@angular/core';
import {
  select,
  Store
} from '@ngrx/store';
import * as rootReducer from '../../reducers';
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  test: Observable<{ id: number, name: string; }>;

  constructor(
    private _store: Store<rootReducer.State>,
  ) {

    this.test = this._store.pipe(
      select(state => state.selectedProgram)
    );

    this._store.pipe(
      select(state => state.selectedProgram)
    ).subscribe(value => {
      console.log(value);
    });
  }

}
