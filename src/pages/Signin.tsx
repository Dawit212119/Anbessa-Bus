import React, { useState } from "react";
import { ArrowLeftIcon, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../components/arrowLeft";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  // Handle form submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 4) {
      setError("Password must be greater than 4 characters.");
      return;
    }
    const phoneNumberRegex = /^\+251\d{9}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setError("Phone number must be in the format +251XXXXXXXXX.");
      return;
    }

    console.log(formData);
    navigate("/");
  };

  return (
    <>
      <div className="max-w-lg mx-auto  bg-black  p-10 ">
        <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md relative">
          <ArrowLeft />
          <div className="flex justify-center mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-lg font-semibold text-white">Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="+251900000000"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </form>
          <p className="mt-5">
            Don`t have an account?{" "}
            <span className="text-orange-800">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
