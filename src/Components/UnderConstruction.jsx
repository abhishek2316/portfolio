import React from "react";

function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0c0f11] text-gray-300 p-6">
      <div className="max-w-2xl text-center">
        <img
          src="/src/assets/images/under-construction.png"  // Update this path to your actual image location
          alt="Under Construction"
          className="mx-auto w-64 h-64 object-contain mb-6"
        />
        
        <p className="text-gray-400 text-xl mb-8">
          Please check back soon!
        </p>
        
        <a 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default UnderConstruction;