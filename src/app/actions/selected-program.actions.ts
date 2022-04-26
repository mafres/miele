import {
  createAction,
  props
} from '@ngrx/store';
import { selectedProgramInterface } from '../models/selected-program.interface';


export const setSelectedProgram = createAction(
  '[Machine Component] Set selected program',
  props<{payload: selectedProgramInterface}>()
);

export const setSelectedProgramSucceeded = createAction(
  '[Machine Component] Set selected program succeeded'
);
