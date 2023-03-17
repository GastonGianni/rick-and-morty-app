export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFav = (personaje) => ({
  type: ADD_FAV,
  payload: personaje,
});

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});
