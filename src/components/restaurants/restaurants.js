import Ionicons from '@expo/vector-icons/Ionicons';
import { View, SafeAreaView, Image, TextInput, Text, Link, Button, ScrollView } from "react-native";
import { styles } from ".";
import { Header } from '../header/header';
import { useNavigation } from '@react-navigation/native';

export function Restaurants() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column' }}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={{ marginTop: 40, borderRadius: 20 }}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Encontre um restaurante"
            inputSearch
          />

          <Ionicons
            name="md-search"
            size={32}
            color="red"
            style={styles.ionIconSearch}
          />

        </View>
        <Text
          style={{
            width: 340,
            fontSize: 22,
            color: "#333",
            textAlign: "left",
            fontWeight: 700,
          }}
        >
          Restaurantes
        </Text>

        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/screen/restaurant01.png")}
              style={styles.imageTitle}
            />
            <Text style={styles.title}>Divina Pasta</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/screen/restaurant01.png")}
              style={styles.imageTitle}
            />
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("Restaurant")}
            >Mamma Mia</Text>

          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/screen/restaurant01.png")}
              style={styles.imageTitle}
            />
            <Text style={styles.title}>Divina Pasta</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/screen/restaurant01.png")}
              style={styles.imageTitle}
            />
            <Text style={styles.title}>Mamma Mia</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
