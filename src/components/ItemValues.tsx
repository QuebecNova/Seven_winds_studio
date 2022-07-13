import React from "react";
import { IItemCount } from "../types/IData";

type Props = {
  ItemValue?: IItemCount;
  index: number;
};

export default function ItemValues({ ItemValue, index }: Props) {
  
  return (
    <li className={"item-count"}>
      <p className="index">{ItemValue && index}</p>
      <p className="value">{ItemValue && ItemValue.title}</p>
      <p className="time">{ItemValue && ItemValue.number}</p>
    </li>
  );
}
