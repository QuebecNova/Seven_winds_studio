import React, { useState } from "react";
import { IData } from "../types/IData";
import Search from "./Search";
import Remove from "./Remove";

type Props = {
  data: IData[];
  removedItem: string;
  setRemovedItem: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function SideBars(props: Props) {
  const [stretched, setStretched] = useState("none");

  const { 
    data, 
    removedItem, 
    setRemovedItem, 
    inputValue, 
    setInputValue 
  } = props

  return (
    <nav>
      <Remove
        data={data}
        removedItem={removedItem}
        setRemovedItem={setRemovedItem}
        stretched={stretched === "remove"}
        setStretched={setStretched}
      />
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        stretched={stretched === "search"}
        setStretched={setStretched}
      />
    </nav>
  );
}
