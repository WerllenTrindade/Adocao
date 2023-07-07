import 'react-native-gesture-handler';
import React, {useEffect} from 'react'
import * as Font from 'expo-font';
import { Walcome } from './src/screens/Walcome';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import theme from './src/theme';
import { Register } from './src/screens/Register';
import { SignIn } from './src/screens/SignIn';
import { Routers } from './src/routes/Routes';


export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Bold: require('./assets/fonts/Poppins-Bold.ttf'),
        ExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
        ExtraLight: require('./assets/fonts/Poppins-ExtraLight.ttf'),
        Light: require('./assets/fonts/Poppins-Light.ttf'),
        Medium: require('./assets/fonts/Poppins-Medium.ttf'),
        Regular: require('./assets/fonts/Poppins-Regular.ttf'),
        SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
      });
    };

    loadFonts();
  }, []);


  return (
    <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor='transparent' />
    <Routers/>
    </NavigationContainer>

  );
}

