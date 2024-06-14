import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    try {
      const response = await fetch("http://localhost:2000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          address: address,
          mobile: mobile,
          email: email,
          message: message,
        }),
      });

      // Log the status and response body for debugging
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Add User</h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="password">
              Mobile Number
            </label>
            <input
              type="text"
              value={mobile}
              autoComplete="current-password"
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              Address
            </label>
            <input
              type="text"
              value={address}
              autoComplete="username"
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="password">
              Message
            </label>
            <textarea
              value={message}
              autoComplete="new-password"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
