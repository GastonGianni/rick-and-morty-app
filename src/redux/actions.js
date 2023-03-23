export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (personaje) => ({
  type: ADD_FAV,
  payload: personaje,
});

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

export const filterCards = (gender) => ({
  type: FILTER,
  payload: gender,
});

export const orderCards = (order) => ({
  type: ORDER,
  payload: order,
});
