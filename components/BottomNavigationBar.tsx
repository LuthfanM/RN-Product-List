import React from "react";
import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import { IconWidth } from "../helper/Constant";

const BottomNavigationBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <View
        style={{
          borderTopColor: "red",
          borderTopWidth: 3,
          borderTopLeftRadius: 700,
          borderTopRightRadius: 700,          
        }}
      >
        <View style={styles.navbar}>
          <Pressable style={styles.paddIcon}>
            <Ionicons
              name="md-checkmark-circle"
              size={IconWidth}
              color="green"
            />
          </Pressable>
          <Pressable style={styles.paddIcon}>
            <Ionicons
              name="md-checkmark-circle"
              size={IconWidth}
              color="green"
            />
          </Pressable>
          <Pressable style={styles.paddIcon}>
            <Ionicons
              name="md-checkmark-circle"
              size={IconWidth}
              color="green"
            />
          </Pressable>
          <Pressable style={styles.paddIcon}>
            <Ionicons
              name="md-checkmark-circle"
              size={IconWidth}
              color="green"
            />
          </Pressable>
          <Pressable style={styles.paddIcon}>
            <Ionicons
              name="md-checkmark-circle"
              size={IconWidth}
              color="green"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default BottomNavigationBar;
