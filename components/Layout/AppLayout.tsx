import React, { ReactNode, useContext, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { ItemContext, TItemType } from "../../context/ItemContext";
import styles from "../../styles/styles";

interface Props {
  children?: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  const { FetchMore, noScrol } = useContext(ItemContext) as TItemType;

  const onRefresh = () => {
    FetchMore();
    setRefreshing(true);    
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}          
          refreshControl={
            <RefreshControl enabled={noScrol? false: true} refreshing={refreshing} onRefresh={onRefresh} />
          }
          bounces={noScrol? false: true}
        >
          {children}
        </ScrollView>      
    </View>
  );
};
