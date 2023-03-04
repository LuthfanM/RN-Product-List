import React from "react";
import { Divider, Text } from "react-native-paper";
import { AppLayout } from "../components/Layout/AppLayout";
import { MainCard } from "../components/MainCard";
import { ProductProps } from "../helper/types";
import styles from "../styles/styles";

const ProductScreen = ({ route, navigation }: ProductProps): JSX.Element => {
  const { data } = route.params;
  
  return (
    <AppLayout>      
        <MainCard style={styles.fullCard} data={data} isFull />
        <Divider />      
    </AppLayout>
  );
};

export default ProductScreen;
