import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
  
      <label>
        Number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
  
      <label>
        Number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
  
      <button className="button-spacing" onClick={handleAddition}>Addition</button>
      <button className="button-spacing" onClick={handleSubtraction}>Subtraction</button>
      <button className="button-spacing" onClick={handleMultiplication}>Multiplication</button>
      <button className="button-spacing" onClick={handleDivision}>Division</button>
  
      {result && <h1>Result: {result}</h1>}
    </div>
  );
s  
}

export default Calculator;
