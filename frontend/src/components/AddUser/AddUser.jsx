import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://add-user-1l6p.onrender.com/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          mobile,
          email,
          message,
        }),
      });

      if (response.ok) {
        toast.success("User added successfully!");
        navigate("/"); // Redirect to the home page
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
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
            <label className="block mb-2" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              value={message}
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
