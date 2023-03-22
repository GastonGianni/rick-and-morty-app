import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { myFavorites } = props;
  const { onClose } = props;

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  const handleClose = () => {
    onClose(props.id);
  };

  const handleFavorite = () => {
    setIsFav(!isFav);
    isFav ? props.removeFav(props.id) : props.addFav(props);
  };

  return (
    <div className="text-right border relative rounded-md border-slate-300 shadow-xl bg-gradient-to-r max-w-[300px] max-h-[356px] from-violet-500 to-fuchsia-500">
      <button
        onClick={handleClose}
        className="bg-red-500 absolute -translate-x-full opacity-70 hover:opacity-100 cursor-pointer text-white font-bold w-7"
      >
        X
      </button>{' '}
      {isFav ? (
        <button onClick={handleFavorite} className="scale-125 transition-all absolute left-1 opacity-70 hover:opacity-100 cursor-pointer ">
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className="transition-all absolute left-1 opacity-70 hover:opacity-100 cursor-pointer ">
          🤍
        </button>
      )}
      <img src={props.image} alt="" />
      <h2 className="absolute -translate-y-10 font-bold text-white bg-slate-500 rounded-md opacity-80 hover:opacity-100 cursor-pointer transition-all translate-x-4 p-1">
        <Link to={`/detail/${props.id}`}>{props.name}</Link>
      </h2>
      <div className="flex flex-wrap font-semibold justify-around text-white h-[50px] items-center">
        <h2 className="">Species : {props.species}</h2>
        <h2 className="">Gender : {props.gender}</h2>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => {
      dispatch(addFav(personaje));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
