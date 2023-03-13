export default function Card(props) {
  return (
    <div className="text-right border relative rounded-md border-slate-300 shadow-xl">
      <button
        onClick={props.onClose}
        className="bg-red-500 absolute -translate-x-full opacity-70 hover:opacity-100 cursor-pointer text-white font-bold w-7"
      >
        X
      </button>
      <img src={props.image} alt="" />
      <h2 className="absolute -translate-y-10 font-bold text-white bg-slate-500 rounded-md opacity-80 hover:opacity-100 cursor-pointer transition-all translate-x-4 p-1">
        {props.name}
      </h2>
      <div className="flex font-semibold">
        <h2 className="mr-auto">{props.species}</h2>
        <h2 className="">{props.gender}</h2>
      </div>
    </div>
  );
}
