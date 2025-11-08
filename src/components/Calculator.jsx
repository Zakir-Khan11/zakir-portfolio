import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  const backspace =() => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input className="input-box" type="text" value={input} readOnly />
      <div className="buttons">
        {["1","2","3","/","4","5","6","*","7","8","9","-","0",".","=","+"].map((item) => (
          <button
            key={item}
            onClick={() => (item === "=" ? calculate() : handleClick(item))}
          >
            {item}
          </button>
        ))}
        <button className="clear-btn" onClick={clear}>C</button>
        <button className="back-btn" onClick={backspace}>⌫</button>
      </div>
    </div>
  );
}