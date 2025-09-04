import React from "react";

const Button = ({ elem }) => {
  const Icon = elem?.icon; // safe check

  return (
    <button className="w-full px-4 py-2 rounded-md flex items-center gap-2 text-lg text-zinc-300 hover:bg-[#6556cd] hover:text-zinc-50 duration-300 cursor-pointer">
      {Icon ? <Icon /> : null}
      <h1>{elem?.linkName}</h1>
    </button>
  );
};

export default Button;
