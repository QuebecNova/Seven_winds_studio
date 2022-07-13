import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import { IItem } from "../types/IData";
import ItemValues from "./ItemValues";
import { v4 as uuid } from "uuid";

type Props = {
  item: IItem;
  openedItem: string;
};

export default function ItemContent({ item, openedItem }: Props) {

  const [items, setItems] = useState(item.data)

  function renderItemValue() {
    const fieldsArr = [];
    for (let i = 0; i < 13; i++) {
      fieldsArr.push(
        <ItemValues ItemValue={items[i]} index={i + 1} key={uuid()} />
      );
    }
    return fieldsArr;
  }

  function sort (e : React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()

    const sortedItems = items.slice().sort((a,b) => {
      return a.number - b.number
    })
    setItems(sortedItems)
  }

  return (
    <div
      className={`item__values ${
        openedItem === item.title ? "active" : "inactive"
      }`}
    >
      <div className="header" onClick={sort}>
        <div className="no">
          <p>
            #
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </p>
        </div>
        <p className="title">Title</p>
        <div className="number">
          <p>
            Number
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </p>
        </div>
      </div>
      <div className="content">
        <ul>{renderItemValue()}</ul>
      </div>
    </div>
  );
}
