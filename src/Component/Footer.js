import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#161513] py-4">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white text-sm flex items-center">
          {new Date().getFullYear()} © Aiman Syakir.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
