import { ADD_FAV, REMOVE_FAV } from './actions';

const initialState = {
  myFavorites: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        myFavorites: [state.myFavorites.filter((personaje, id) => id.toString() !== action.payload)],
      };
    default:
      return state;
  }
};
