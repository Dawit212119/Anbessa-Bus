import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../components/arrowLeft";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "", // Ensure password is included
    firstName: "",
    lastName: "",
    username: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 4) {
      setError("Password must be greater than 4 characters.");
      return;
    }
    const phoneNumberRegex = /^9\d{8}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setError("Phone number must be in the format 920245372.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("The password must match");
      return;
    }

    const userData = {
      email: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phoneNumber,
      username: formData.username,
      password: formData.password, // Include password in the request
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      setError("Failed to sign up. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-black p-10">
        <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md relative">
          <ArrowLeft />
          <div className="flex justify-center mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-lg font-semibold text-white">SignUp</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
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
                required
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
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              SignUp
            </button>
          </form>
          <p className="mt-5">
            Already have an account?{" "}
            <span className="text-orange-800">
              <Link to="/signin">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;