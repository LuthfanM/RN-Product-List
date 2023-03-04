import React, { ReactNode, useContext, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { ItemContext } from "../../context/ItemContext";
import styles from "../../styles/styles";

interface Props {
  children?: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  const [FetchMore] = useContext(ItemContext);

  const onRefresh = () => {
    setRefreshing(true);
    console.log("masuk kah")    
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
        <View style={styles.container}>
      {children}
      </View>
    </ScrollView>
  );
};
