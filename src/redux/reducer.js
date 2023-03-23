import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const newState = { ...state };
      newState.allCharacters = [...state.myFavorites, action.payload];
      return { ...newState, myFavorites: [...state.myFavorites, action.payload] };
    case REMOVE_FAV:
      const payloadString = action.payload.toString();
      return {
        ...state,
        myFavorites: state.myFavorites.filter((favorite) => favorite.id.toString() !== payloadString),
      };

    case FILTER:
      if (action.payload === 'All') return { ...state, myFavorites: [...state.allCharacters] };
      const filteredCharacters = state.allCharacters.filter((character) => character.gender === action.payload);
      return { ...state, myFavorites: filteredCharacters };

    case ORDER:
      const orderedCharacters = [...state.allCharacters];
      orderedCharacters.sort((a, b) => (action.payload === 'A' ? a.id - b.id : b.id - a.id));
      return { ...state, myFavorites: orderedCharacters };
    default:
      return state;
  }
};
