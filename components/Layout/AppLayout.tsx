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
    FetchMore;
    setRefreshing(true);    
    console.log("masuk kah");
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {children}
      </ScrollView>
    </View>
  );
};
