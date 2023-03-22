import React from 'react';
import { connect } from 'react-redux';
import { removeFav } from '../redux/actions';
import Card from './Card';

function Favorites(props) {
  const { myFavorites } = props;
  const onClose = props.removeFav;

  return (
    <section>
      <h1 className="text-center text-2xl font-semibold mt-4 text-violet-500">FAVORITES LIST</h1>
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
