import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GestureResponderEvent } from "react-native/types";

type ItemType = {
  id: number;
  name: string;
  cover: string;
  desc: string;
  price: number | string;
};

type RootStackParamList = {
  List: undefined;
  Product: { data: ItemType };
};


type ListProps = NativeStackScreenProps<
  RootStackParamList,
  'List'
>;

type ProductProps = NativeStackScreenProps<
  RootStackParamList,
  'Product'
>;

type CardType = {
  data: ItemType;
  style: any;
  isFull?: boolean;
  onPress?: (event: GestureResponderEvent, data: ItemType) => void;
};

interface ErrorItem {
  json: () => Promise<ItemType[]>;
}

export { RootStackParamList, ListProps, ProductProps, ItemType, ErrorItem, CardType };
