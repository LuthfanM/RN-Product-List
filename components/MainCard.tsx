import React from "react";
import { Card, Text } from "react-native-paper";
import { CardType } from "../helper/types";
import styles from "../styles/styles";

export const MainCard = ({ data, isFull, onPress, style }: CardType) => {  
  return (
    <Card style={style} onPress={(e) => onPress && onPress(e, data)}>
      <Card.Cover source={{ uri: data.cover }} />
      <Card.Title title={data.name} subtitle={data.price}></Card.Title>
      {isFull && (
        <Card.Content>
          <Text variant="titleLarge">Description</Text>
          <Text style={{color: 'blue', textAlign: 'justify'}} variant="bodyMedium">{data.desc}</Text>
        </Card.Content>
      )}
    </Card>
  );
};
