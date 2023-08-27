import { useState, useRef } from "react";

function App() {
  const [change, setChange] = useState(false);
  const [text, setText] = useState("Me da um beijinho cowboy?");

  const buttons = useRef(null);

  const changeButton = () => {
    setChange(!change);
  };

  const changeText = () => {
    setText("Ihuuul! Aguardando seu beijinho te amo :)");
    buttons.current.classList.add("hidden");
  };

  return (
    <div className="App w-full h-screen bg-green-800 flex justify-center items-center">
      <div className="text-center text-white w-96">
        <h1 className="text-3xl mb-6">{text}</h1>
        <div className="w-full flex justify-around" ref={buttons}>
          {change ? (
            <>
              <button className="bg-red-600 p-4" onClick={changeButton}>
                NÃO!
              </button>
              <button className="bg-green-600 p-4" onClick={changeText}>
                SIM!
              </button>
            </>
          ) : (
            <>
              <button className="bg-green-600 p-4" onClick={changeText}>
                SIM!
              </button>
              <button className="bg-red-600 p-4" onClick={changeButton}>
                NÃO!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
