import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-10">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">Welcome to Employee Management</h1>
      <p className="text-lg text-blue-800 mb-8 text-center px-4 max-w-2xl">
        Manage your employees efficiently with our user-friendly platform. 
        Track attendance, payroll, and much more with just a few clicks.
      </p>
      <Link to="/signup">
        <Button gradientDuoTone="cyanToBlue" size="lg" className="mb-10">
          Get Started
        </Button>
      </Link>
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 border border-blue-500 rounded-lg shadow-md bg-white hover:bg-blue-50 transition duration-300 mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Employee Management</h3>
            <p className="text-gray-700">Easily manage employee records and details.</p>
          </div>
          <div className="p-6 border border-blue-500 rounded-lg shadow-md bg-white hover:bg-blue-50 transition duration-300 mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Attendance Tracking</h3>
            <p className="text-gray-700">Keep track of employee attendance with ease.</p>
          </div>
          <div className="p-6 border border-blue-500 rounded-lg shadow-md bg-white hover:bg-blue-50 transition duration-300 mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Payroll Management</h3>
            <p className="text-gray-700">Manage payroll efficiently and accurately.</p>
          </div>
          <div className="p-6 border border-blue-500 rounded-lg shadow-md bg-white hover:bg-blue-50 transition duration-300 mb-4">
            <h3 className="text-xl font-semibold text-blue-800">User-Friendly Interface</h3>
            <p className="text-gray-700">Navigate effortlessly with our intuitive design.</p>
          </div>
          <div className="p-6 border border-blue-500 rounded-lg shadow-md bg-white hover:bg-blue-50 transition duration-300 mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Reports Generation</h3>
            <p className="text-gray-700">Generate insightful reports for better decision making.</p>
          </div>
          <div className="p-6 border border-blue-500 rounded-lg shadow-md bg-white hover:bg-blue-50 transition duration-300 mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Secure Access</h3>
            <p className="text-gray-700">Ensure data security with robust access controls.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
