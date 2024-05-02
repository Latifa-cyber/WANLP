import Card from "./Card";

function Marketing({ features }) {
  return (
    <div className="px-10">
      <div className="flex justify-center items-centermy-10">
        <h1 className="md:text-4xl text-3xl font-bold max-w-[500px] text-center leading-tight">
          <span className="text-blue-600"> الميزات </span> الرئيسية لمدقق السرقة
          العلمية
        </h1>
      </div>
      <p className="flex justify-center md:text-2xl text-xl font-semibold text-gray-500 my-6 ">
        تساعدك هذه الميزات المدروسة على القضاء على السرقة العلمية وتقديم عملك
        بثقة.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {features.map((item, index) => (
          <Card key={index} feature={item} />
        ))}
      </div>
    </div>
  );
}

export default Marketing;
