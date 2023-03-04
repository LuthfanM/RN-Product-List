import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MainCard } from "../components/MainCard";
import { ItemContext } from "../context/ItemContext";
import { AppLayout } from "../components/Layout/AppLayout";
import { Row } from "../components/Layout/Row";
import { Column } from "../components/Layout/Column";
import { ItemType, ListProps } from "../helper/types";
import styles from "../styles/styles";
import SwipeUpDown from "react-native-swipe-up-down";
import OverlayScreen from "../screens/OverlayScreen";
import BottomNavigationBar from "../components/BottomNavigationBar";

const ListScreen = ({ route, navigation }: ListProps): JSX.Element => {
  const [items] = useContext(ItemContext);
  const swipeUpDownRef = useRef<any>();//access dom

  console.log("isi item", items);
  const navigate = (data: ItemType) => {
    navigation.navigate("Product", {
      data: data,
    });
  };

  const onShow = (e: any) => {    
    swipeUpDownRef.current.showFull();
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
      <BottomNavigationBar onMiddlePress={onShow} />
      <SwipeUpDown
        ref={swipeUpDownRef}        
        itemFull={(close: any) => (
          <ScrollView >           
            <TouchableWithoutFeedback onPress={close}> 
              <View style={{borderTopLeftRadius: 10, borderTopWidth: 10}}>
                {/* <TouchableOpacity onPress={close}> */}
                  <OverlayScreen />
                {/* </TouchableOpacity> */}
              </View>      
              </TouchableWithoutFeedback>      
          </ScrollView>
          
        )}        
        onShowFull={() => console.log("full")}
        animation="spring"
        extraMarginTop={5}
        disableSwipeIcon={true}          
        style={{ backgroundColor: "white" }} // style for swipe
      />
    </AppLayout>
  );
};

export default ListScreen;
