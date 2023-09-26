import { View, SafeAreaView, Image, Text } from "react-native";
import { styles } from ".";
import Ionicons from '@expo/vector-icons/Ionicons';

const restaurantEllpse = require("../../../assets/screen/ellipse.png")
const restaurantImageTopo = require("../../../assets/screen/restaurant-details.jpg")

export function Restaurant() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageTopo}>
                <Image source={restaurantImageTopo} />
                <Ionicons
                    name="arrow-back"
                    size={32}
                    color="white"
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 30,
                    }}
                />
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={restaurantEllpse} />
            </View>

            <Text
                style={{
                    width: 340,
                    fontSize: 22,
                    color: "#333",
                    textAlign: "center",
                    fontWeight: 700,
                }}
            >
                Mamma Mia
            </Text>

            <View>
                <View style={styles.contentDescription}>
                    <Text style={styles.contentTitle}>Descrição</Text>
                    <Text style={styles.contentText}>O Mamma Mia é um restaurante especializado em culinária intaliana e vinhos</Text>
                </View>

                <View style={styles.contentDescription}>
                    <Text style={styles.contentTitle}>Contato</Text>
                    <Text style={styles.contentText}>(11) 3000-0101</Text>
                    <Text style={styles.contentText}>http://www.mammamia.com.br</Text>
                </View>

                <View style={styles.contentDescription}>
                    <Text style={styles.contentTitle}>Faiza de preço</Text>

                    <Text style={styles.contentText}>De R$40 a R$70 por pessoa</Text>

                    <Text style={{ flex: 1, borderBottomWidth: 1, borderColor: "#CCC" }} />
                </View>

                <View style={styles.contentDescription}>
                    <Text style={styles.contentTitle}>Horários de Funcionamento</Text>

                    <Text style={styles.contentText}>De terca à domingo, das 17:00 às 23:00</Text>
                </View>

                <View style={styles.contentDescription}>
                    <Text style={styles.contentTitle}>Formas de pagamento</Text>
                    <Text style={styles.contentText}>Dinheio, cartão de crédito e débito.</Text>
                </View>
            </View>
        </SafeAreaView>

    )
}