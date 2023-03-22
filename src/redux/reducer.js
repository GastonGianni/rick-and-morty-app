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
      const payloadString = action.payload.toString();
      return {
        ...state,
        myFavorites: state.myFavorites.filter((favorite) => favorite.id.toString() !== payloadString),
      };
    default:
      return state;
  }
};
