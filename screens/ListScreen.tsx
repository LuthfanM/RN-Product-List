import React, { useContext, useRef } from "react";
import {
  View,  
  TouchableWithoutFeedback,
  ScrollView,  
} from "react-native";
import { MainCard } from "../components/MainCard";
import { ItemContext, TItemType } from "../context/ItemContext";
import { AppLayout } from "../components/Layout/AppLayout";
import { Row } from "../components/Layout/Row";
import { Column } from "../components/Layout/Column";
import { ItemType, ListProps } from "../helper/types";
import styles from "../styles/styles";
import SwipeUpDown from "react-native-swipe-up-down";
import OverlayScreen from "../screens/OverlayScreen";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Loading from "../components/Loading";

const ListScreen = ({ route, navigation }: ListProps): JSX.Element => {
  const { items, pull, setnoScrol } = useContext(ItemContext) as TItemType;
  const swipeUpDownRef = useRef<any>(); //access dom

  console.log("isi item", items);
  const navigate = (data: ItemType) => {
    navigation.navigate("Product", {
      data: data,
    });
  };

  const onShow = (e: any) => {
    setnoScrol(true);
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
      {!pull ? <Row>{generateItem()}</Row> : <Loading />}
      <BottomNavigationBar onMiddlePress={onShow} />
      <SwipeUpDown
        ref={swipeUpDownRef}
        itemFull={(close: any) => (
          <ScrollView>
            <TouchableWithoutFeedback
              onPress={() => {
                setnoScrol(false);
                close;
              }}
            >
              <View style={{ borderTopLeftRadius: 10, borderTopWidth: 10 }}>
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
        disableSwipeIcon        
        style={{ backgroundColor: "white" }} // style for swipe
      />
    </AppLayout>
  );
};

export default ListScreen;
