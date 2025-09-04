import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topnav from "./Main/Topnav";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="w-[80%] h-full">
        <Topnav />
      </div>
    </div>
  );
};

export default Home;
