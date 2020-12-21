import { createStore } from 'redux';
import { Reducer } from './reducer';
export const store = createStore(Reducer);
