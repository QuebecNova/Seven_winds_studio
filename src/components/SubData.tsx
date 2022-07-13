import React, { useCallback, useContext } from "react";
import { v4 as uuid } from "uuid";
import { IItem, ISubData } from "../types/IData";
import Item from "./Item";
import { useState } from "react";
import { MainContext } from "./Main";
import { IContext } from "../types/IContext";

type Props = {
  subData: ISubData;
  activeSubData: boolean;
};

export default function SubData({ subData, activeSubData }: Props) {

  const [activeItem, setActiveItem] = useState(false);
  const [openedItem, setOpenedItem] = useState("");

  const main: IContext = useContext(MainContext);

  const renderItem = useCallback(() => {

    function openItemContent(item: IItem) {
      let openedItem = item.title;
      if (main.activeItemTitle === item.title) {
        openedItem = "";
      }
      main.activeItemTitle = openedItem;
      setOpenedItem(openedItem);
    }
    
    return subData.items.map((item) => {
      return (
        <div onClick={() => openItemContent(item)}>
          <Item
            item={item}
            activeItem={activeItem}
            openedItem={openedItem}
            key={uuid()}
          />
        </div>
      );
    })
    }, [subData, main, activeItem, openedItem]
  )

  function setActive() {
    setActiveItem(!activeItem);
  }

  return (
    <div className={`subData ${activeSubData ? "active" : "inactive"}`}>
      <button className="subData__button tab" onClick={setActive}>
        {subData.title}
      </button>
      <div className="items">{renderItem()}</div>
    </div>
  );
}
