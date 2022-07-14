import React, { useState } from "react";
import x from "../assets/x.svg";
import { IData } from "../types/IData";
import Option from "./Option";
import { v4 as uuid } from 'uuid';

type Props = {
  data: IData[];
  setRemovedItem: React.Dispatch<React.SetStateAction<string>>;
  removedItem: string;
  stretched: boolean;
  setStretched: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ data, setRemovedItem, stretched, setStretched }: Props) {

  const [value, setValue] = useState("Choose item");

  function removeItem(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    setRemovedItem(e.target.value);
  }

  function stretch() {
    stretched ? setStretched('none') : setStretched('remove')
  }

  function renderOptions() {
    return data.map((item) => {
      return <Option item={item.title} key={uuid()}/>;
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
