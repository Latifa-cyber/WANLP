function Card(props) {
  return (
    <div className="inline-block border-2 shadow-[2px_3px_5px_rgba(0,0,0,0.5)] hover:shadow-[4px_6px_15px_rgba(0,0,0,0.5)] border-blue-700 rounded-2xl p-8 md:mx-5 my-5 ">
      <img src={props.icon} alt="icon" />
      <h1 className="text-blue-600 font-bold text-xl">{props.title}</h1>
      <p className="text-gray-500 text-lg">{props.text}</p>
    </div>
  );
}

export default Card;
