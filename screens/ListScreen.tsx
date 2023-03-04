import React, { useContext, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { MainCard } from "../components/MainCard";
import { ItemContext } from "../context/ItemContext";
import { AppLayout } from "../components/Layout/AppLayout";
import { Row } from "../components/Layout/Row";
import { Column } from "../components/Layout/Column";
import { ItemType, ListProps } from "../helper/types";
import styles from "../styles/styles";
import BottomNavigationBar from "../components/BottomNavigationBar";

const ListScreen = ({ route, navigation }: ListProps): JSX.Element => {
  const [items] = useContext(ItemContext);
  console.log("isi item", items)
  const navigate = (data: ItemType) => {    
    navigation.navigate("Product", {
      data: data
    });
  };

  const generateItem = () => {
    let ct: Record<string, any> = [];
    items.forEach((val) => {
      ct.push(
        <Column key={val.id}>
          <MainCard
            data={val}            
            onPress={(e, data) => navigate(data)}
            style={styles.card}
          />
        </Column>
      );
    });
    return <>{ct}</>;
  };

  return (
    <AppLayout>    
      <Row>{generateItem()}</Row>
      <BottomNavigationBar />     
    </AppLayout>
    
  );
};

export default ListScreen;
