import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { useLoadFonts } from "../../hooks/useload-fonts";
import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  ScrollView,
  SectionList,
} from "react-native";
import { Header } from "../header/header";
import { styles } from "./styles";

SplashScreen.preventAutoHideAsync();

export function Restaurants() {
  const navigation = useNavigation();
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      contentContainerStyle={{ display: "flex", flexDirection: "column" }}
    >
      
        <Header />
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

      {/* <View style={{ flex: 1, padding: 70}}>
         
        <Text style={{ textAlign: 'center' }}>Resultados para</Text>
        <Text 
          style={{
            fontSize: 30,
            fontWeight: '700',
            textAlign: 'center'
          }}
        >
          Divindo fogão
        </Text>

        <Ionicons
          name="arrow-back"
          size={32}
          color="white"
          style={{
            position: "absolute",
            top: 50,
            left: 30,
          }}
          onPress={() => navigation.navigate("Restaurants")}
        />

      </View> */}

        <View>
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

        <SectionList style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/screen/restaurant01.png")}
              style={styles.imageTitle}
            />
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("Restaurant")}
            >
              Divina Pasta
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/screen/restaurant01.png")}
              style={styles.imageTitle}
            />
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("Restaurant")}
            >
              Mamma Mia
            </Text>
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
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("Restaurant")}
            >
              Mamma Mia
            </Text>
          </View>
        </SectionList>
      </SafeAreaView>
    </ScrollView>
  );
}
