import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  Observable,
} from 'rxjs';
import {
  map,
  switchMap
} from 'rxjs/operators';

import { selectedProgramService } from '../service/selected-program.service';
import {
  setSelectedProgram,
  setSelectedProgramSucceeded
} from '../actions/selected-program.actions';

@Injectable()
export class SelectedMachineEffects {

  @Effect()
  setSelectedMachine$: Observable<Action> = this._actions.pipe(
    ofType(setSelectedProgram),
    map(action => action.payload),
    switchMap((payload) => this._selectedMachineService.setSelectedProgram(payload).pipe(
        map(() => setSelectedProgramSucceeded())
      )
    )
  );

  constructor(
    private _actions: Actions,
    private _selectedMachineService: selectedProgramService
  ) {}
}
