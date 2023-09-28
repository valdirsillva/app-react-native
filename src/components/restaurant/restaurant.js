import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import { View, SafeAreaView, Image, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLoadFonts } from "../../hooks/useload-fonts";
import { styles } from "./styles";

const restaurantEllpse = require("../../../assets/screen/ellipse.png");
const restaurantImageTopo = require("../../../assets/screen/restaurant-details.jpg");

SplashScreen.preventAutoHideAsync();

export function Restaurant() {
  const navigation = useNavigation();
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      contentContainerStyle={{ display: "flex", flexDirection: "column" }}
    >
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.imageTopo}>
          <Image source={restaurantImageTopo} />
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
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={restaurantEllpse} style={{ position: 'relative', zIndex: 1}} />
        </View>

        <View style={styles.viewContent}>
          <Text
            style={{
              width: 340,
              fontSize: 22,
              color: "#333",
              textAlign: "center",
              fontWeight: 700,
              marginTop: 40,

            }}
          >
            Mamma Mia
          </Text>

          <View>
            <View style={styles.contentDescription}>
              <Text style={styles.contentTitle}>Descrição</Text>
              <Text style={styles.contentText}>
                O Mamma Mia é um restaurante especializado em culinária
                intaliana e vinhos
              </Text>
            </View>

            <View style={styles.contentDescription}>
              <Text style={styles.contentTitle}>Contato</Text>
              <Text style={styles.contentText}>(11) 3000-0101</Text>
              <Text style={styles.contentText}>http://www.mammamia.com.br</Text>
            </View>

            <View style={styles.contentDescription}>
              <Text style={styles.contentTitle}>Faiza de preço</Text>

              <Text style={styles.contentText}>De R$40 a R$70 por pessoa</Text>

              <Text
                style={{ flex: 1, borderBottomWidth: 1, borderColor: "#CCC" }}
              />
            </View>

            <View style={styles.contentDescription}>
              <Text style={styles.contentTitle}>Horários de Funcionamento</Text>

              <Text style={styles.contentText}>
                De terca à domingo, das 17:00 às 23:00
              </Text>
            </View>

            <View style={styles.contentDescription}>
              <Text style={styles.contentTitle}>Formas de pagamento</Text>
              <Text style={styles.contentText}>
                Dinheio, cartão de crédito e débito.
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
