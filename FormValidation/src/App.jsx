import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Users from "./components/Users";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [users, setUsers] = useState([]);

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password != confirmPassword) {
      setError("Password and Confirm Password must be same");
      return;
    }

    if (!/[!@#$%^&*,.]/.test(password)) {
      setError("Password must be contain a special character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must be contain a capital letter");
      return;
    }

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    setUsers([...users, { fullName, email, password }]);

    toast.success("Login Successful!! ✌🏻", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
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
              required
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <input
              className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
              type="password"
              required
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />

            {error && (
              <p className="text-red-500 text-sm font-normal text-center">
                {error}
              </p>
            )}

            <button className="w-[50%] px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold mt-2 hover:from-cyan-600 hover:to-blue-600 transition duration-300">
              Submit
            </button>
          </form>

          <ToastContainer></ToastContainer>
        </div>
      </div>

      {users.map((user) => {
        return <Users users={user} />;
      })}
    </>
  );
};

export default App;
