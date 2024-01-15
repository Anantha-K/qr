import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  const generateQRCode = () => {
    const combinedValue = `${input1}-${input2}`;
    return combinedValue;
  };

  const handleGenerateQR = () => {
    if(input1!=="" || input2!==""){

      setButtonPressed(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col align-middle w-full items-center">
      <div>
        <h1 className="mt-5 text-3xl">Qr Generater</h1>
      </div>
      <div className=" mt-25 items-center align-middle justify-center max-h-screen flex flex-col w-full">
        <h1>Enter Details</h1>
<div className="w-full flex flex-col items-center py-7 space-y-10">
<label
            for="UserEmail"
            className="relative block w-96 overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-green-500"
          >
            <input
              type="text"
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-green-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Name
            </span>
          </label>
          <label
            for="UserEmail"
            className="relative block w-96 overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-green-500"
          >
            <input
              type="text"
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-green-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </span>
          </label>

          <button  onClick={handleGenerateQR} href="#_" class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
Generate QR
</button>

</div>
      </div>
      <div className="w-full flex justify-center ">
        
      {buttonPressed && (
  <div className="bg-white border-2 border-gray-400 mt-4">
    <QRCode
      bgColor="white"
      title="SpectroSpect"
      value={generateQRCode()}
    />
  </div>
)}


      </div>
      <button href="#_" class="inline-flex mt-3 items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
Send Mail
</button>


    </div>
  );
}

export default App;
