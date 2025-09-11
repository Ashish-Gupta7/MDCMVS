import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Dropdown = ({ options, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const dropdownSelect = (elem) => {
    setSelected(elem);
    setOpen(false);
    onChange(elem);
  };

  return (
    <div className="relative inline-block w-40">
      <div
        className="capitalize bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute origin-top mt-1 w-full bg-gray-700 rounded-md shadow-lg z-10 overflow-hidden"
          >
            {options.map((elem, idx) => (
              <motion.h2
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, delay: idx * 0.08 }}
                className={`uppercase text-sm px-4 py-2 cursor-pointer hover:bg-gray-600 ${
                  selected === elem ? "bg-gray-600" : ""
                }`}
                onClick={() => dropdownSelect(elem)}
              >
                {elem}
              </motion.h2>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const CustomSelect = ({ selectedType, options }) => (
  <Dropdown
    options={options}
    defaultValue={options[0]}
    onChange={selectedType}
  />
);

export const DurationSelect = ({ selectedDuration, options }) => (
  <Dropdown
    options={options}
    defaultValue={options[0]}
    onChange={selectedDuration}
  />
);
