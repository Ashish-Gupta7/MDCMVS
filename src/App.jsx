import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#1f1e24] text-white">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
