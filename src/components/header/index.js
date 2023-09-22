
import { StyleSheet, Dimensions } from 'react-native';

const  screenWith = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },

  imageHeader: {
    width: screenWith,
    height: 274,
    resizeMode: 'cover',
    alignSelf: 'flex-start'
  },

  titleHome: {
    position: 'absolute',
    width: 230,
    height: 68,
    top: 48,
    left: 33,
    fontSize: 24,
    fontFamily: 'Poppins_Bold',
    color: '#333',
  },
  
  textHome: {
    position: 'absolute',
    width: 315,
    height: 54,
    top: 136,
    left: 33,
    fontSize: 18,
    fontFamily: 'Poppins_Medium',
    color: '#333',
  },

});
