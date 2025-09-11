import React from "react";
import {
  FaFire,
  FaStar,
  FaFilm,
  FaTv,
  FaUser,
  FaInfoCircle,
} from "react-icons/fa";
import Button from "./MicroComponent.jsx/Button";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const Sidebar = () => {
  const sidebarLinks = [
    { icon: FaFire, linkName: "Trending" },
    { icon: FaStar, linkName: "Popular" },
    { icon: FaFilm, linkName: "Movie" },
    { icon: FaTv, linkName: "Tv" },
    { icon: FaUser, linkName: "Person" },
  ];
  const sidebarLinksBottom = [
    { icon: FaInfoCircle, linkName: "About Us" },
    { icon: MdOutlineConnectWithoutContact, linkName: "Contact Us" },
  ];

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Logo */}
        <button className="w-max flex items-center gap-2 cursor-pointer">
          <img
            className="w-10 h-10"
            src="/Images/Icons/MDCMVS-logo.svg"
            alt="logo"
          />
          <h1 className="text-2xl font-bold">MDCMVS</h1>
        </button>

        <h1 className="text-lg font-semibold mt-2">New Feeds</h1>

        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-4 mt-4">
          {sidebarLinks.map((elem, index) => (
            <Button key={index} elem={elem} />
          ))}
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold">Website Information</h1>
        <div className="flex flex-col gap-4 mt-4">
          {sidebarLinksBottom.map((elem, index) => (
            <Button key={index} elem={elem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
