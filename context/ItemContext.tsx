import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../helper/Constant";
import Api from "../helper/Api";
import { ItemType } from "../helper/types";

type TItemContext = [
  ItemType[],
  ()=>void
  // React.Dispatch<React.SetStateAction<ItemType[]>>
];
export const ItemContext = createContext<TItemContext>([[], () => null]);

export const ItemProvider = (Props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [pull, setPull] = useState<boolean>(false);

  const FetchMore = () => {
    console.log("PULLED")
    setPull(true);
  };

  useEffect(() => {    
      Api.fetchItem(API_URL)
        .then((res) => {
          setItems(res);
          setPull(false);
        })
        .catch((err) => {
          setPull(false);
          throw new Error("error happen");
        });    
  }, [pull]);

  return (
    <ItemContext.Provider value={[items, FetchMore]}>
      {Props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
