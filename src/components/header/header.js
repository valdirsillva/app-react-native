import { View, Text, Image } from "react-native";
import { styles } from ".";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/screen/screen1.png")}
        style={styles.imageHeader}
      />
      <Text style={styles.titleHome}>Descubra novos sabores</Text>
      <Text style={styles.textHome}>
        Aqui eu converso com você sobre nossa proposta
      </Text>
    </View>
  );
}
