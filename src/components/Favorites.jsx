import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

function Favorites(props) {
  let { myFavorites } = props;

  return (
    <div className="flex gap-5 mt-3 items-center justify-center flex-wrap">
      {myFavorites.map((character) => (
        <div>
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
          />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
