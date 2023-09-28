import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Restaurant } from "./src/components/restaurant/restaurant";
import { Restaurants } from "./src/components/restaurants/restaurants";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Restaurants">
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{ title: "Detalhes do restaurante" }}
        />
        <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{ title: "Restaurantes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
