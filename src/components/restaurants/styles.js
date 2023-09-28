
import { StyleSheet, Dimensions } from 'react-native';

const viewHeigth  = Dimensions.get("window").height

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    marginTop: -15,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "white",
    backgroundColor: "#fff",

    height: viewHeigth,
  },

  inputSearch: {
    width: 350,
    height: 70,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginTop: -100,
  },

  ionIconSearch: {
    position: 'absolute',
    bottom: 50,
    left: 15,
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
    width: '100%',
  },

  imageContainer: {
    margin: 5,
    position: 'relative', // Permite posicionar o texto dentro do contêiner da imagem
  },

  title: {
    position: 'absolute', // Permite posicionar o texto de forma absoluta dentro do contêiner
    left: 5,
    bottom: 5,
    color: 'white',
    fontSize: 16,
  },

  imageTitle: {
    width: 160,
    height: 160,
    borderRadius: 8,
  },

});
