import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { styles } from './globals'

import * as SplashScreen from 'expo-splash-screen'
import { useLoadFonts } from './src/hooks/useload-fonts';
import { Home } from './src/screens/home';
/**
 * Método que 
 */
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Home />

      <StatusBar style="auto" />
    </View>
  );
}
