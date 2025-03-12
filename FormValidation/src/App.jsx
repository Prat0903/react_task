import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Users from "./components/Users";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (formData.password != formData.confirmPassword) {
      setError("Password and Confirm Password must be same");
      return;
    }

    if (!/[!@#$%^&*,.]/.test(formData.password)) {
      setError("Password must be contain a special character");
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must be contain a capital letter");
      return;
    }
    
    setUsers([...users, formData]);

    setError("");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

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
              name="fullName"
              value={formData.fullName}
              onChange={handleChanges}
            />
            <input
              className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
              type="email"
              required
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChanges}
            />
            <input
              className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
              type="password"
              required
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChanges}
            />

            <input
              className="w-[75%] border-2 px-4 py-2 rounded-lg outline-none border-blue-400 text-lg focus:border-blue-600 transition duration-300"
              type="password"
              required
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChanges}
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

      {users.map((user, index) => {
        return <Users key={index} users={user} />;
      })}
    </>
  );
};

export default App;
