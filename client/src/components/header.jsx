import React from "react";
import logo from "../assests/BiteBookLogo.png";

function header() {
  return (
    <header className="bg-white py-7">
      <nav className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="logo" className="h-12" />
        <p className="text-3xl font-bold">BiteBook</p>
        <ul className="flex space-x-4">
          <li>
            <a
              className="text-black font-semibold hover:text-gray-200"
              href="#"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
