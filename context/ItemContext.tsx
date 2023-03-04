import React, { createContext, useEffect, useState } from "react";
import { API_URL } from "../helper/Constant";
import Api from "../helper/Api";
import { ItemType } from "../helper/types";

export type TItemType = {
  items: ItemType[];
  pull: boolean;
  FetchMore: () => void;
  noScrol: boolean;
  setnoScrol: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ItemContext = createContext<TItemType | null>(null);

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
  const [items, setItems] = useState<ItemType[]>([
    { id: 0, name: "", desc: "", cover: "https://google.com", price: "" },
  ]);
  const [pull, setPull] = useState<boolean>(false);
  const [noScrol, setnoScrol] = useState<boolean>(false);

  const FetchMore = () => {    
    setPull(!pull);
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
    <ItemContext.Provider
      value={{ items, pull, FetchMore, noScrol, setnoScrol }}
    >
      {Props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
