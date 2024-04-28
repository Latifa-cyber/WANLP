function Card({ feature }) {
  return (
    <div className="inline-block border-2 shadow-[2px_3px_5px_rgba(0,0,0,0.5)] hover:shadow-[4px_6px_15px_rgba(0,0,0,0.5)] border-blue-700 rounded-2xl md:mx-5 my-5  p-5 pt-0 m-4">
      <div className="mb-2">
        <img src={feature.icon} className="my-5 object-cover" />
      </div>
      <div className="mb-1">
        <h1 className="text-xl font-bold text-blue-600">{feature.title}</h1>
      </div>
      <div className="align-block align-middle flex items-center">
        <p className="text-gray-500 text-lg align-block my-3 align-middle">
          {feature.body}
        </p>
      </div>
    </div>
  );
}

export default Card;
