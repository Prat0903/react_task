import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log("function called");

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg w-96 p-8 rounded-lg">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center gap-4"
        >
          <input
            className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <input
            className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button className="w-[50%] px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold mt-2 hover:from-cyan-600 hover:to-blue-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
