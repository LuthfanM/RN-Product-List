import React, { useRef, useState } from "react";
import {
  GestureResponderEvent,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import { IconWidth } from "../helper/Constant";

const icon = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "md-checkmark-circle",
  },
  {
    id: 3,
    name: "md-checkmark-done",
  },
  {
    id: 4,
    name: "md-chevron-forward-circle",
  },
  {
    id: 5,
    name: "md-chevron-up-circle",
  },
];

const BottomNavigationBar = ({
  onMiddlePress,
}: {
  onMiddlePress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        style={styles.expands}
        onPress={(e) => onMiddlePress(e)}
      >
        <View></View>
      </TouchableOpacity>
      <View style={styles.navbar}>
        {icon.map((val) => (
          <Pressable
            key={val.id}
            style={styles.paddIcon}
            onPress={() => console.log("pencet")}
          >
            <Ionicons name={val.name as any} size={IconWidth} color="red" />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default BottomNavigationBar;
