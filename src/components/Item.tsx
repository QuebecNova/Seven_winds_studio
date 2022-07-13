import React from "react";
import getDate from "../services/getDate";
import { IItem } from "../types/IData";
import ItemContent from "./ItemContent";

type Props = {
  item: IItem;
  activeItem: boolean;
  openedItem: string;
};

export default function Item({ item, activeItem, openedItem }: Props) {
  
  const dateStart = getDate(item.dateStart);
  const dateEnd = getDate(item.dateEnd);

  return (
    <div className={`item ${activeItem ? "active" : "inactive"}`}>
      <div className="item__header">
        <div className="titles">
          <p className="title">{item.title}</p>
          <p className="subtitle">{item.subTitle}</p>
        </div>
        <p className="time">
          {dateStart} - {dateEnd}
        </p>
      </div>
      <ItemContent item={item} openedItem={openedItem} />
    </div>
  );
}
