import { View, ScrollView } from "react-native";
import { Header } from "../components/header/header";
import { Restaurants } from "../components/restaurants/restaurants";
import { Restaurant } from "../components/restaurant/restaurant";

export function Home() {
  return (
    <ScrollView >
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        <Restaurants />
      </View>
    </ScrollView>
  )
}