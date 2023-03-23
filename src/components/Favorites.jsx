import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { removeFav } from '../redux/actions';
import Card from './Card';
import { orderCards, filterCards } from '../redux/actions';

function Favorites(props) {
  const [aux, setAux] = useState(false);
  const { myFavorites } = props;
  const onClose = props.removeFav;

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <section className="text-center">
      <h1 className="text-center text-2xl font-semibold mt-4 text-violet-500">FAVORITOS</h1>
      <select
        onChange={handleOrder}
        className="mt-4 mx-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-10 rounded-xl focus:outline-none text-white font-semibold px-2"
      >
        <option value="A" className="font-semibold text-slate-700">
          Ascendente
        </option>
        <option value="B" className="font-semibold text-slate-700">
          Descendente
        </option>
      </select>
      <select
        name=""
        id=""
        onChange={handleFilter}
        className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 h-10 rounded-xl text-white focus:outline-none font-semibold px-2"
      >
        <option value="All" className="font-semibold text-slate-700">
          Todos
        </option>
        <option value="Male" className="font-semibold text-slate-700">
          Male
        </option>
        <option value="Female" className="font-semibold text-slate-700">
          Female
        </option>
        <option value="Genderless" className="font-semibold text-slate-700">
          Genderless
        </option>
        <option value="unknown" className="font-semibold text-slate-700">
          Unknown
        </option>
      </select>
      <div className="flex gap-5 mt-3 items-center justify-center flex-wrap">
        {myFavorites.map((favorite) => (
          <div key={favorite.id}>
            <Card {...favorite} onClose={onClose} />
          </div>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
