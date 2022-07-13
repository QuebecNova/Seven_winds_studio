import React, { createContext, useCallback } from "react";
import { v4 as uuid } from "uuid";
import SingleData from "./SingleData";
import { useState } from "react";
import { IData } from "../types/IData";
import SideBars from "./SideBars";

export const MainContext: any = createContext(null);

const value = {
  activeItemTitle: "",
};

type Props = {
  data: IData[];
};

export default function Main({ data }: Props) {

  const [activeData, setActiveData] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [removedItem, setRemovedItem] = useState("");

  const renderData = useCallback(() => {
    
    /* open button
    //////////////////
       singleData
       subData
       item
       item-content
       item-values  */

    return data.map((singleData) => {
      const matchesSelected =
        removedItem.includes(singleData.title) ||
        !singleData.title.match(inputValue);
      if (matchesSelected) return [];

      return (
        <SingleData
          singleData={singleData}
          activeData={activeData}
          key={uuid()}
        />
      );
    });
  }, [activeData, data, inputValue, removedItem])

  return (
    <MainContext.Provider value={value}>
      <div className="main">
        <button
          className="main__button tab"
          onClick={() => setActiveData(activeData ? false : true)}
        >
          Open!
        </button>
        {renderData()}
        <SideBars 
          data={data}
          removedItem={removedItem}
          setRemovedItem={setRemovedItem}
          inputValue={inputValue} 
          setInputValue={setInputValue}
        />
      </div>
    </MainContext.Provider>
  );
}
