import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");
  const [imgSrc, setImgSrc] = useState();

  const underweight = "https://i.ibb.co/jGG2FwQ/underweight.png";
  const overweight = "https://i.ibb.co/28BP6Z0/overweight.png";
  const healthy = "https://i.ibb.co/1QKWZ3v/healthy.png";
  const search = "https://i.ibb.co/ZJpKqLz/search.png";

  const bmiCalc = (event) => {
    event.preventDefault();
    if (weight == "" || height == "" || weight < 0 || height < 0) {
      alert("Please input a positive number");
    } else {
      const heightm = height / 100;
      const bmi = weight / (heightm * heightm);
      setBmi(bmi.toFixed(1));
      // Show Message
      if (bmi < 18.5) {
        setMsg(
          <span className="text-yellow-500 font-semibold text-lg">
            You are underweight
          </span>
        );
        setImgSrc(underweight);
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMsg(
          <span className="text-green-500 font-semibold text-lg">
            Your weight is normal
          </span>
        );
        setImgSrc(healthy);
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMsg(
          <span className="text-red-500 font-semibold text-lg">
            Your are overweight
          </span>
        );
        setImgSrc(overweight);
      } else {
        setMsg(
          <span className="text-red-700 font-semibold text-lg">
            You are out of control now
          </span>
        );
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex justify-center items-center mx-auto h-screen max-w-[700px] gap-0">
        <div className=" border-gray-300 shadow-xl shadow-slate-350 px-8 py-10 rounded-md w-full mx-auto max-h-[480px]">
          <form onSubmit={bmiCalc}>
            <h1 className="font-bold text-2xl text-center pb-2">
              BMI Calculator
            </h1>
            <div>
              <p className="font-bold py-2 text-lg">Weight (Kg)</p>
              <input
                type="number"
                className="w-full border border-gray-400 rounded-md p-2 hover:ring-2 hover:ring-blue-500/50 duration-150"
                placeholder="Enter Weight in KG"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <p className="font-bold py-2 text-lg">Height (Cm)</p>
              <input
                type="number"
                className="w-full border border-gray-400 rounded-md p-2 hover:ring-2 hover:ring-blue-500/50 duration-150"
                placeholder="Enter Height in CM"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-black text-white p-2 rounded-md my-4 text-lg hover:ring-2 hover:ring-blue-500/50 duration-150"
              type="submit"
            >
              Submit
            </button>
            <br />
          </form>
          <input
            className="bg-whtie text-black p-2 w-full rounded-md text-lg border-2 border-gray-400 hover:ring-2 hover:ring-blue-500/50 duration-150"
            type="button"
            value="Reload"
            onClick={reload}
          />

          <p className="font-semibold text-center pt-4 text-lg">
            Your BMI is: {bmi}
          </p>
          <p className="text-center py-2">{msg}</p>
        </div>
        <div className="border-gray-300 shadow-xl shadow-slate-350 px-8 py-10 rounded-md w-full mx-auto max-h-[480px]">
          {imgSrc ? (
            <img src={imgSrc} alt="" className="mx-auto" />
          ) : (
            <img src={search} alt="" className="mx-auto py-14" />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
