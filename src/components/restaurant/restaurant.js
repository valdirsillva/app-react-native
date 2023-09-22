import { View, SafeAreaView, Image, TextInput, Text } from "react-native";
import { styles } from ".";

export function Restaurant() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 45 }}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Encontre um restaurante"
          inputSearch
        />
      </View>
      <Text
        style={{
          width: 340,
          fontSize: 25,
          color: "#333",
          textAlign: "left",
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
          <Text style={styles.title}>Mamma Mia</Text>
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
  );
}
