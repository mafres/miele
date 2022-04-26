import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { selectedProgramInterface } from '../models/selected-program.interface';
import * as selectedProgramReducer from '../reducers/selected-program.reducer';


@Injectable()
export class selectedProgramService {

  constructor(
    protected _httpClient: HttpClient,
    private _store: Store<selectedProgramReducer.State>
  ) {}

  setSelectedProgram(payload: selectedProgramInterface) {
    let url = 'https://62600fdb53a42eaa07ff8272.mockapi.io/machine/1';

    return this._httpClient.put<selectedProgramInterface>(url, {activeProgram: payload});
  }
}
