import React, { useState } from "react";
import data from "../data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }

  console.log(multiple);

  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-[60%] h-[50%] m-auto flex flex-col items-center">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="w-1/3 p-3 bg-cyan-600 rounded-md cursor-pointer"
        >
          Enable Multi Selection
        </button>
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div key={index} className="mt-4 bg-cyan-600 w-full">
                <div
                  className="h-20 text-center cursor-pointer flex justify-center items-center gap-10"
                  key={index}
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  {selected === item.id ? (
                    <span className="font-semibold">x</span>
                  ) : (
                    <span className="font-semibold">+</span>
                  )}
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className="text-center font-[helvetica] text-sm p-3">
                        {item.answer}
                      </div>
                    )
                  : selected === item.id && (
                      <div className="text-center font-[helvetica] text-sm p-3">
                        {item.answer}
                      </div>
                    )}
                {/* {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <div className="text-center font-[helvetica] text-sm pb-3">
                    {item.answer}
                  </div>
                ) : null} */}
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
