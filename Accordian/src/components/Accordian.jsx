import React, { useState } from "react";
import data from "../data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-[60%] h-[50%] m-auto bg-zinc-700">
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div className="mt-4">
                <div
                  className="text-center text-lg font-semibold cursor-pointer"
                  key={index}
                  onClick={() => handleSingleSelection(item.id)}
                >
                  <h3>{item.question}</h3>
                  {selected === item.id ? <span>x</span> : <span>+</span>}
                </div>
                {selected === item.id ? (
                  <div className="text-center mt-2 mb-3 font-[helvetica] text-sm">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })
        ) : (
          <h1>No Data Found!!</h1>
        )}
      </div>
    </div>
  );
};

export default Accordian;
