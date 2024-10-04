import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-12">
      <h1 className="text-9xl font-bold text-red-900 my-16">About Our Application</h1>
      <p className="text-lg text-blue-700 my-12 text-center max-w-4xl">
        Welcome to our Employee Management App! This platform is designed to help businesses efficiently manage their workforce. 
        With features such as attendance tracking, payroll management, and comprehensive reporting, 
        our application aims to streamline HR processes and enhance productivity.
      </p>
      
      <h2 className="text-3xl font-semibold text-blue-900 mb-6">Our Mission</h2>
      <p className="text-lg text-blue-700 my-10 text-center max-w-4xl">
        Our mission is to provide an easy-to-use, all-in-one solution for employee management. 
        We believe that effective workforce management leads to increased efficiency and satisfaction in the workplace.
      </p>

      <h2 className="text-3xl font-semibold text-blue-900 mb-6">Meet the Creator</h2>
      <p className="text-lg text-blue-700 my-10 text-center max-w-4xl">
        This application was developed by Prashant Agrawal, a passionate developer focused on creating impactful software solutions. 
        With a strong foundation in full-stack development, I aim to help businesses achieve their goals through technology.
      </p>

      <h2 className="text-3xl font-semibold text-blue-900 mb-6">Get in Touch</h2>
      <p className="text-lg text-blue-700 text-center max-w-4xl">
        If you have any questions or feedback, feel free to reach out! We are always looking for ways to improve and grow.
      </p>
    </div>
  );
};

export default About;
