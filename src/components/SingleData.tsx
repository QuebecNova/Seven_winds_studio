import React, { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import { IData } from "../types/IData";
import SubData from "./SubData";

type Props = {
  singleData: IData;
  activeData: boolean;
};

export default function SingleData({ singleData, activeData }: Props) {

  const [activeSubData, setActiveSubData] = useState(false);

  const renderSubData = useCallback(() => {
    return singleData.items.map((subData) => {
      return (
        <SubData subData={subData} activeSubData={activeSubData} key={uuid()} />
      );
    });
  }, [activeSubData, singleData])

  return (
    <div className={`data ${activeData ? "active" : "inactive"}`}>
      <button
        className="singleData__button tab"
        onClick={() => setActiveSubData(activeSubData ? false : true)}
      >
        {singleData.title}
      </button>
      {renderSubData()}
    </div>
  );
}
