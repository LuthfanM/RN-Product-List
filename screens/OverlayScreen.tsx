import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native-paper";
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
  {
    id: 6,
    name: "home",
  },
  {
    id: 7,
    name: "md-checkmark-circle",
  },
  {
    id: 8,
    name: "md-checkmark-done",
  },
  {
    id: 9,
    name: "md-chevron-forward-circle",
  },
  {
    id: 10,
    name: "md-chevron-up-circle",
  },
];

const OverlayScreen = () => {
  return (
    <View style={styles.paddIcon}>
      <View>
        <Text style={{ fontWeight: "bold" }}>Features</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1
        }}
      >        
        {icon.map((val, idx) => (
          <Pressable
            key={val.id}
            style={styles.paddIcon}
            onPress={() => console.log("pencet")}
          >
            <Ionicons name={val.name as any} size={IconWidth} color="red" />     
            <Text style={{fontSize: 8, textAlign: 'center'}}>{val.name.slice(0, 5)}</Text>       
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default OverlayScreen;
