import React, { useEffect, useState } from "react";
import CustomSelect from "../MicroComponent.jsx/CustomSelect";
import { getTrendingData } from "../../utils/API";
import SubCard from "../MicroComponent.jsx/SubCard";

const HorizontalCards = () => {
  const [currentSelection, setCurrentSelection] = useState("all");
  const [data, setData] = useState([]);

  const selectedType = (val) => {
    setCurrentSelection(val);
  };

  const trending = async () => {
    const { results } = await getTrendingData(currentSelection);
    setData(results);
  };
  useEffect(() => {
    trending();
  }, [currentSelection]);

  return (
    <div className="p-8 overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl uppercase">Trending</h2>
        <CustomSelect selectedType={selectedType} />
      </div>
      <div className="mt-10 overflow-x-auto flex gap-4">
        {data.map((elem, idx) => (
          <SubCard key={idx} elem={elem} currentSelection={currentSelection} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
