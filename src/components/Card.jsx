import { Link } from 'react-router-dom';

export default function Card(props) {
  const { onClose } = props;
  const handleClose = (e) => {
    onClose(props.id);
  };

  return (
    <div className="text-right border relative rounded-md border-slate-300 shadow-xl bg-gradient-to-r max-w-[300px] max-h-[356px] from-violet-500 to-fuchsia-500">
      <button
        onClick={handleClose}
        className="bg-red-500 absolute -translate-x-full opacity-70 hover:opacity-100 cursor-pointer text-white font-bold w-7"
      >
        X
      </button>
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
