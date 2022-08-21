import { combineReducers } from 'redux';
import { filterReducer } from './filters/filter-reducer';
import { positiosReducer } from './positions/position-reducer';

export const rootReducer = combineReducers({ positions: positiosReducer, filters: filterReducer });
