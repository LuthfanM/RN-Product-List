import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import ItemProvider from "./context/ItemContext";
import { LIST, PRODUCT } from "./helper/Constant";
import { RootStackParamList } from "./helper/types";
import { ListScreen, ProductScreen } from "./screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const headerStyle: Record<string, any> = {
    headerStyle: {
      backgroundColor: "red",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerTitleAlign: "center",
  };

  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={LIST}
            component={ListScreen}
            options={{
              title: "List Product",
              ...headerStyle,
            }}
          />
          <Stack.Screen
            name={PRODUCT}
            component={ProductScreen}
            options={{
              title: "Detail Product",
              ...headerStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}
