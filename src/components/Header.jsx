import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
<<<<<<< HEAD
    <header className="bg-gradient-to-r from-[#2A2A2A] to-[#1D1D1D] p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / App Name */}
        <div className="text-white text-3xl font-bold">
          <Link
            to="/"
            className="hover:text-teal-500 opacity-70 transition duration-300"
          >
            My AI Assistant
=======
    <header className="bg-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / App Name */}
        <div className="text-black text-4xl font-extrabold">
          <Link to="/" className="hover:text-gray-700 transition duration-300">
            Generative AI
>>>>>>> 7727c96 (Generative Ai)
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
<<<<<<< HEAD
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
=======
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
>>>>>>> 7727c96 (Generative Ai)
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu (Desktop) */}
<<<<<<< HEAD
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
        <nav className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-10">
            <li>
              <Link
                to="/"
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/image"
<<<<<<< HEAD
                className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              >
                Image Generation
              </Link>
            </li>
            <li>
              <Link
                to="/audio"
<<<<<<< HEAD
                className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              >
                Audio-to-Text
              </Link>
            </li>
            <li>
              <Link
                to="/recipe"
<<<<<<< HEAD
                className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              >
                Recipe Generator
              </Link>
            </li>
            <li>
              <Link
                to="/aboutDeveloper"
<<<<<<< HEAD
                className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
                className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              >
                About Developer
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu for small screens */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
<<<<<<< HEAD
        <ul className="space-y-4 bg-gradient-to-r from-[#2A2A2A] to-[#1D1D1D] p-4">
          <li>
            <Link
              to="/"
              className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
        <ul className="space-y-6 bg-white p-6 shadow-lg">
          <li>
            <Link
              to="/"
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/image"
<<<<<<< HEAD
              className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              onClick={() => setIsMenuOpen(false)}
            >
              Image Generation
            </Link>
          </li>
          <li>
            <Link
              to="/audio"
<<<<<<< HEAD
              className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              onClick={() => setIsMenuOpen(false)}
            >
              Audio-to-Text
            </Link>
          </li>
          <li>
            <Link
              to="/recipe"
<<<<<<< HEAD
              className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              onClick={() => setIsMenuOpen(false)}
            >
              Recipe Generator
            </Link>
          </li>
          <li>
            <Link
              to="/aboutDeveloper"
<<<<<<< HEAD
              className="text-white opacity-70 text-lg hover:text-teal-500 transition duration-300"
=======
              className="text-black font-extrabold text-xl hover:text-gray-700 transition duration-300"
>>>>>>> 7727c96 (Generative Ai)
              onClick={() => setIsMenuOpen(false)}
            >
              About Developer
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
