import { Component } from '@angular/core';
import {
  select,
  Store
} from '@ngrx/store';
import * as rootReducer from '../../reducers';
import { selectedProgramInterface } from '../../models/selected-program.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    private _store: Store<rootReducer.State>,
  ) {
    this._store.pipe(
      select(state => state.selectedProgram)
    ).subscribe((selectedProgram: selectedProgramInterface) => {
      console.log(selectedProgram);
    });
  }
}
