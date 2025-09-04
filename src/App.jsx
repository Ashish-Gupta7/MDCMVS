import React from "react";
import Navbar from "./Components/Navbar";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-[#1f1e24] text-white">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
