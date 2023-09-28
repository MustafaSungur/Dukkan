import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Detail",
            headerStyle: { backgroundColor: "#1565C0" },
            headerTitleStyle: { color: "#eee" },
            headerTintColor: "#eee",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
