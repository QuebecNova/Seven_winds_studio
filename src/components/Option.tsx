import React from "react";

type Props = {
  item: string;
};

export default function option({ item }: Props) {
    
  return <option value={item}>{item}</option>;
}
