import React, { useState } from "react";
import x from "../assets/x.svg";
import { IData } from "../types/IData";
import Option from "./Option";

type Props = {
  data: IData[];
  setRemovedItems: React.Dispatch<React.SetStateAction<string>>;
  removedItems: string;
};

export default function Search({ data, setRemovedItems }: Props) {
    
  const [stretched, setStretched] = useState(false);
  const [value, setValue] = useState("Choose item");

  function removeItem(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    setRemovedItems(e.target.value);
  }

  function stretch() {
    setStretched(!stretched);
  }

  function renderOptions() {
    return data.map((item) => {
      return <Option item={item.title} />;
    });
  }

  return (
    <div
      className={`remove ${stretched ? "stretched" : "squeezed"}`}
      onClick={stretch}
    >
      <img className="x" src={x} alt="S" />
      <select
        className={stretched ? "active" : "inactive"}
        onClick={(e) => e.stopPropagation()}
        onChange={removeItem}
        value={value}
      >
        <option>Remove item</option>
        {renderOptions()}
      </select>
    </div>
  );
}
