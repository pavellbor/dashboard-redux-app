import { ADD_POSITIONS } from './position-actions';

export const positiosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS:
      return action.positions;
    default:
      return state;
  }
};
