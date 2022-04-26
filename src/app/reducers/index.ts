import {
  ActionReducerMap, createFeatureSelector, createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as selectedProgram from './selected-program.reducer'

export interface State {
  selectedProgram: selectedProgram.State
}

export const reducers: ActionReducerMap<State> = {
  selectedProgram: selectedProgram.selectedProgramReducer
};

//export const getActiveProgramState = createFeatureSelector<State>('selectedMachine');
export const getActiveProgram = (state: State) => state.selectedProgram;

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
