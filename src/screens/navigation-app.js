import { Restaurants } from "../components/restaurants/restaurants";
import { Restaurant } from "../components/restaurant/restaurant";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export function NavigationApp() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Restaurants"  >
        <Stack.Screen name="Restaurant" component={Restaurant} options={{ title: "Detalhes do restaurante" }} />
        <Stack.Screen name="Restaurants" component={Restaurants} options={{ title: "Restaurantes" }} />
      </Stack.Navigator >
    </NavigationContainer>
  )
}

