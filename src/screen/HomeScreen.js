import React from "react";

function HomeScreen() {
  return (
    <div className="w-full h-screen bg-white relative">
      <div className="w-full h-40 bg-green-400 z-0"></div>
      <div className="absolute w-5/6 h-96 bg-gray-200 mx-auto top-36 z-50"></div>
    </div>
  );
}

export default HomeScreen;
