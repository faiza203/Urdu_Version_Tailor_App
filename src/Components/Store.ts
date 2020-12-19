import { createStore } from 'redux';
import { Reducer } from './Reducer';
export const store = createStore(Reducer);
