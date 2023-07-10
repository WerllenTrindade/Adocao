import React, { useEffect } from 'react'

import { View, BackHandler, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Models';
import Imagem from '../../../assets/imageCao.jpg'
import theme from '../../theme';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { SafeAreaView } from 'react-native';
import { ArrDetails } from './ArrDetails';
import { Button } from '../../components/Button';

export function DetailsPet(){
  const { navigate, canGoBack, goBack } = useNavigation<propsStack>();
  useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);        
      return () =>
          BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  }, []);


  function handleBackButton() {
    if (canGoBack()) {
        goBack();
    }
    else {
        BackHandler.exitApp();
    }

    return true;
}


  return(
    <View style={styles.container}>
        <View style={{
          position: 'absolute',
          width: '100%',
          height: 200,
          backgroundColor: theme.COLORS.PRIMARY,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}/>
      <SafeAreaView style={{marginTop: 12, flex:1}}>
          <View   style={{
              paddingHorizontal: 15,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
          <TouchableOpacity onPress={handleBackButton}>
              <AntDesign
                name='left'
                size={25}
                color={theme.COLORS.WHITE}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBackButton}>
              <Ionicons
                name='heart-outline'
                size={24}
                color={theme.COLORS.ATTENTION}
              />
          </TouchableOpacity>
        </View>
        <View  style={{
          top: 10,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image resizeMode='contain' 
        style={{height: 250, width: 250, borderRadius: 125}}
        source={Imagem}/>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.name}>
          Bia
        </Text>
        <ArrDetails />
      </View>

      <ScrollView style={{paddingHorizontal: 15, paddingTop: 25}}>
        <Text style={{fontFamily: 'MontserratBold', fontSize: 20}}>Sobre</Text>
        <Text style={{fontFamily: 'PoppinsRegular', fontSize: 14, textAlign: 'justify'}}>Cachorro resgatado na rua, agora vive feliz e ajuda a encontrar{' '}
            lares para outros animais abandonados. Um verdadeiro herói peludo!</Text>
      </ScrollView>

      <View style={{paddingHorizontal: 15, flex:1, justifyContent: 'flex-end', paddingBottom: '2%'}}>
      <Button title='ADOTAR'/>
      </View>
      </SafeAreaView>
      </View>
  )
}
