import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as rootReducer from "../../reducers";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {selectedProgramInterface} from "../../models/selected-program.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  selectedProgramVisible: boolean = false;
  activeProgram$: Observable<{ id: number, name: string }>;

  constructor(
    private _store: Store<rootReducer.State>,
  ) {
    this.activeProgram$ = this._store.pipe(
      select(state => state.selectedProgram)
    );
  }

  toggleSelectedProgram() {
    this.selectedProgramVisible = !this.selectedProgramVisible
  }
}
