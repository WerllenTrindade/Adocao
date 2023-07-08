import React, { useEffect } from 'react'

import { View, BackHandler, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Models';
import Imagem from '../../../assets/imageCao.jpg'
import theme from '../../theme';

import { Button } from '../../components/Button';
import { ArrDetails } from './ArrDetails';
import styles from './styles';

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
      <Header onClose={handleBackButton} title='Detalhes'/>
      <View style={styles.containBody}>
        <Image resizeMode='contain' 
        style={styles.image}
        source={Imagem}/>
      <Text style={styles.race}>Pastor alemão</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.name}>
          Bia
        </Text>
        <ArrDetails />
      </View>

      <View style={{paddingHorizontal: 15, paddingTop: 25}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 25}}>Sobre</Text>
        <Text style={{fontFamily: 'Regular', fontSize: 15, textAlign: 'justify'}}>Cachorro resgatado na rua, agora vive feliz e ajuda a encontrar{' '}
            lares para outros animais abandonados. Um verdadeiro herói peludo!</Text>
      </View>

      <View style={{paddingHorizontal: 15, flex: 1, justifyContent: 'flex-end', paddingBottom: '2%'}}>
      <Button title='ADOTAR'/>
      </View>
      </View>
  )
}
