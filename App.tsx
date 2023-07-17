import 'react-native-gesture-handler';
import React, { useCallback, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { Routers } from './src/routes/Routes';
import { QueryClientProvider } from '@tanstack/react-query'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppProvider } from './src/context';
import queryClient from './src/services/queryClient';

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
    MontserratItalic: Montserrat_400Regular_Italic,
    PoppinsLight: Poppins_300Light,
    PoppinsRegular: Poppins_400Regular,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <AppProvider>
            <NavigationContainer>
              <StatusBar barStyle="dark-content" backgroundColor='transparent' />
              <Routers />
            </NavigationContainer>
        </AppProvider>
      </PaperProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

