import React, { useEffect } from 'react'

import { View, BackHandler, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Models';
import Imagem from '../../../assets/imageCao.jpg'
import theme from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={{flex: 1}}>
      <Header onClose={handleBackButton} title='Detalhes'/>
      <View style={{alignItems: 'center', paddingTop: 15}}>
      <Image resizeMode='cover' style={{maxWidth: '90%', maxHeight: '50%'}}
       source={Imagem} />
       <View style={{alignItems: 'flex-end', width: '100%', paddingRight: 25}}>
       <Text style={{fontFamily: 'Regular', paddingTop: 2, color: theme.COLORS.CAPTION_500}}>Pastor alemão</Text>
       </View>
       <Text style={{
          fontSize: 25,
          fontFamily: 'Regular',
          color: theme.COLORS.TITLE,
          letterSpacing: 1.5
        }}>Bia</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, width: theme.SIZES.width}}>
          <View style={styles.containInfo}>
            <Text style={styles.textInfo}> <MaterialCommunityIcons name="dna"/> Femea</Text>
          </View>
          <View style={styles.containInfo}>
            <Text style={styles.textInfo}>8 Aninhos</Text>
          </View>
          <View style={styles.containInfo}>
            <Text style={styles.textInfo}> 15 Kg</Text>
          </View>
        </View>
        <View style={{width: theme.SIZES.width, alignItems: 'center', paddingTop: 15}}>
            <Text style={{fontFamily: 'Light', textAlign: 'justify'}}>
            Cachorro resgatado na rua, agora vive feliz e ajuda a encontrar 
            lares para outros animais abandonados. Um verdadeiro herói peludo!
            </Text>
        </View>
      </View>
        <TouchableOpacity style={{ backgroundColor: theme.COLORS.PRIMARY, borderRadius: 8, alignItems: 'center', marginHorizontal: 15}}>
          <Text style={{
            color: theme.COLORS.WHITE, 
            paddingVertical: 15,
            fontSize: 12,
            letterSpacing: 1,
            fontFamily: 'SemiBold', }}>ADOTAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containInfo:{
    backgroundColor: theme.COLORS.BUTTON_NO_ACTIVE,
    borderRadius: 8, 
    width: (theme.SIZES.width / 4),
    height: (theme.SIZES.width / 11),
    alignItems: 'center'
  },
  textInfo: {
    color: theme.COLORS.WHITE,
    padding: 9,
    fontFamily: 'SemiBold'
  }
})