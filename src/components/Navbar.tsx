import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Links, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="bg-gray-900 py-4  w-full mb-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="src\img\Logo.png" className="w-8 h-8 " />
            <span className="text-xl font-bold">Anbessa</span>{" "}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors cursor-not-allowed"
            >
              Home
            </Link>
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors cursor-not-allowed"
            >
              Routes
            </Link>
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors cursor-not-allowed"
            >
              Schedule
            </Link>
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors cursor-not-allowed"
            >
              About
            </Link>
            <Link
              to=""
              className="text-gray-300 hover:text-white transition-colors cursor-not-allowed"
            >
              Contact
            </Link>
          </div>

          {/* if there is no currentUser */}

          {/* {!currentUser && (
            <div className="flex gap-4">
              <Link to="/signin">
                <button
                  // onClick={() => setIsModalOpen(true)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  // onClick={() => setIsModalOpen(true)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  SignUp
                </button>
              </Link>
            </div>
          )} */}
          <div className="flex gap-4">
            <Link to="/signin">
              <button
                // onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                // onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                SignUp
              </button>
            </Link>
          </div>

          {/* if there is currentuser it will show the dashboard for each user */}

          {/* {currentUser && (
            <Link
              to="/Dashboard"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Dashboard
            </Link>
          )} */}
        </div>
      </div>

      {/* <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </nav>
  );
};

export default Navbar;
