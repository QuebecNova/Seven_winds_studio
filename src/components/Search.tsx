import React, { useState } from "react";
import search from "../assets/search.svg";

type Props = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
};

export default function Search({ setInputValue, inputValue }: Props) {
    
  const [stretched, setStretched] = useState(false);

  function changeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function stretch() {
    setStretched(!stretched);
  }

  return (
    <div
      className={`search ${stretched ? "stretched" : "squeezed"}`}
      onClick={stretch}
    >
      <input
        className={stretched ? "active" : "inactive"}
        type="Search..."
        value={inputValue}
        onChange={changeInputValue}
        onClick={(e) => e.stopPropagation()}
      />
      <img src={search} alt="S" />
    </div>
  );
}
