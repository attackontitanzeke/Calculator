import React, { useState } from "react";

const buttons = [
  ["(", ")", "ans", "del", "clear"],
  ["7", "8", "9", "%", "√"],
  ["4", "5", "6", "x", "÷"],
  ["1", "2", "3", "+", "-"],
  [".", "0", "±", "ENTER"],
];

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (value) => {
    if (value === "clear") {
      setInput("");
      setOutput("");
    } else if (value === "del") {
      setInput(input.slice(0, -1));
    } else if (value === "ENTER") {
      try {
        let expression = input.replace(/x/g, "*").replace(/÷/g, "/");
        setOutput(eval(expression).toString());
      } catch {
        setOutput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-500 w-screen">
      <div className="bg-blue-100 rounded-xl shadow-lg p-4 w-90">
        <div className="bg-blue-200 p-4 rounded-md text-right">
          <div className="text-gray-600 text-sm">{input}</div>
          <div className="text-3xl font-bold">{output || "0"}</div>
        </div>
        <div className="grid grid-cols-5 gap-2 mt-4">
          {buttons.flat().map((btn, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg ${
                btn === "ENTER"
                  ? "col-span-2 bg-blue-600 text-white"
                  : "bg-blue-300"
              }`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
