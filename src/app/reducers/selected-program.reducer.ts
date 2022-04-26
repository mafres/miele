import {
  createReducer,
  on
} from '@ngrx/store';
import { setSelectedProgram } from '../actions/selected-program.actions';

export interface State {
  id: number,
  name: string
};

const initialState: State = {
  id: 0,
  name: 'automatic'
};

export const selectedProgramReducer = createReducer(
  initialState,
  on(
    setSelectedProgram,
    (state, { payload }) => (
    {
      id: payload.id,
      name: payload.name
    }
  ))
);
