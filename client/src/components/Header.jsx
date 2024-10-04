import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar fluid rounded className="bg-blue-900 py-4 px-8 shadow-lg">
      <Navbar.Brand href="/">
        <img
          src="https://cdn-icons-png.flaticon.com/128/15597/15597792.png"
          className="mr-3 h-8 sm:h-10"
          alt="Employee Management Logo"
        />
        <span className="self-center whitespace-nowrap text-3xl font-bold text-red-600">
          Employee Management
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Link to="/dashboard" className="text-lg font-semibold text-black hover:text-white transition duration-300 mx-3">
          Dashboard
        </Link>
        <Link to="/about" className="text-lg font-semibold text-black hover:text-white transition duration-300 mx-3">
          About
        </Link>
        <Link to="/signup" className="text-lg font-semibold text-black hover:text-white transition duration-300 mx-3">
          Sign Up
        </Link>
        <Link to="/login">
          <Button gradientDuoTone="purpleToPink" size="md" className="ml-4">
            Login
          </Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

