import { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import { Poppins_100Thin, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins"
/**
 * Hook responsável por carregar fontes no projeto
 * @returns Retorna fonts 
 */
export const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    'Poppins_Thin': Poppins_100Thin,
    'Poppins_Regular': Poppins_400Regular,
    'Poppins_Medium': Poppins_500Medium,
    'Poppins_Bold': Poppins_700Bold,
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
  return { fontsLoaded, onLayoutRootView };
}