import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

interface Props {
  children?: ReactNode;
}

export const Column = ({ children }: Props) => {
  return (
      <View style={styles.column}>{children}</View>
  );
};
