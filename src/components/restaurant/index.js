
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    gap: 20,
  },
  parentScrollView: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    top: 265,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 30,
    width: '100%',
  },

  imageContainer: {
    // flex: 1,
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

  inputSearch: {
    width: 350,
    height: 70,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    padding: 10,
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
  },

  ionIconSearch: {
    position: 'absolute',
    top: 20,
    left: 15,
  },
});
