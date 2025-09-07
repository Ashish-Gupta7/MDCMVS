import React from "react";
import Sidebar from "../Components/Sidebar";
import Topnav from "../Components/Home/Topnav";
import Header from "../Components/Home/Header";
import HorizontalCards from "../Components/Home/HorizontalCards";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[20%] h-full border-r-[1px] p-5 flex flex-col gap-6 overflow-hidden">
        <Sidebar />
      </div>
      <div className="w-[80%] h-full overflow-y-auto">
        <Topnav />
        <Header />
        <HorizontalCards />
      </div>
    </div>
  );
};

export default Home;
