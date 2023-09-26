// import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen'
import { useLoadFonts } from './src/hooks/useload-fonts';
import { NavigationApp } from './src/screens/navigation-app';
import { NavigationContainer } from '@react-navigation/native';
/**
 * Método que 
 */
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <NavigationApp />
    </NavigationContainer>
  );
}


