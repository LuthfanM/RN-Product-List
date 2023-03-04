import React from "react";
import { View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Loading = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
};

export default Loading;
