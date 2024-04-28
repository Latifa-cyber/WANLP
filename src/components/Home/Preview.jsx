import upload from "../../assets/upload.png";
import result from "../../assets/result.png";

function Preview() {
  return (
    <div>
      <h1 className="md:text-5xl text-3xl font-bold md:my-10 my-5 leading-tight text-center">
        إستخدم Plag <span className="text-blue-600">Check</span> اليوم لأجل
      </h1>
      <h2 className="text-blue-600 md:text-3xl text-xl font-semibold text-center my-8">
        التحقق من السرقة العلمية!
      </h2>
      <div className="md:grid grid-cols-2 gap-1 justify-evenly">
        <img src={upload} alt="upload img" />
        <img src={result} alt="result img" />
      </div>
    </div>
  );
}

export default Preview;
