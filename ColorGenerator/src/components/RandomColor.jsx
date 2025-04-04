import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#333");
  // const [isActive, setIsActive] = useState(false);

  function handleGenerateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      const randomColor = Math.floor(Math.random() * hex.length);
      hexColor += hex[randomColor];
    }
    setColor(hexColor);
  }

  function handleGenerateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  // function handleHexToggleActive() {
  //   setIsActive(!isActive);
  //   setTypeOfColor("hex");
  // }

  // function handleRgbToggleActive() {
  //   setIsActive(!isActive);
  //   setTypeOfColor("rgb");
  // }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
      }}
    >
      <div className="p-3 flex gap-5 justify-center">
        <button
          onClick={() => setTypeOfColor("hex")}
          className={`px-3 py-1 ${
            typeOfColor === "hex" ? "bg-amber-600" : "bg-zinc-700"
          } rounded-md text-white cursor-pointer`}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className={`px-3 py-1 ${
            typeOfColor === "rgb" ? "bg-cyan-600" : "bg-zinc-800"
          } rounded-md text-white cursor-pointer`}
        >
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleGenerateRandomHexColor
              : handleGenerateRandomRgbColor
          }
          className="px-3 py-1 bg-zinc-950 rounded-md text-white cursor-pointer"
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <h3 className="font-semibold text-4xl font-mono text-white">
          {typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}
        </h3>
        <h1 className="font-semibold text-4xl text-white font-serif">
          {color}
        </h1>
      </div>
    </div>
  );
};

export default RandomColor;
