import React, { useEffect, useState } from 'react'

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
import { AdotarDog } from '../../compo../../components/Modals/AdotarDog'
import { useDog } from '../../context/Dog';

export function DetailsPet(){
  const { dogDetails } = useDog();
  const [visibleModal, setVisibleModal] = useState(false);
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

  const handleCloseModal = () => setVisibleModal(false);

  const handleOpenModal = () => setVisibleModal(true);


  return(
    <View style={styles.container}>
    <View style={styles.contain}/> {/* olhar esse contain */}
      <SafeAreaView style={{marginTop: 12, flex:1}}>
          <View  style={{
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
          {dogDetails.nome}
        </Text>
        <ArrDetails
        idade={dogDetails.idade}
        peso={dogDetails.peso}
        sexo={dogDetails.sexo}
        />
      </View>

      <ScrollView style={{paddingHorizontal: 15, paddingTop: 25}}>
        <View >
          <Text style={{fontFamily: 'MontserratBold', fontSize: 25}}>Personalidade</Text>
          <Text style={{fontFamily: 'PoppinsRegular', fontSize: 14, textAlign: 'justify'}}>
            {dogDetails.personalidade}
          </Text>
        </View>
        <View style={{paddingTop: 8}}>
          <Text style={{fontFamily: 'MontserratBold', fontSize: 25}}>Porte</Text>
          <Text style={{fontFamily: 'PoppinsRegular', fontSize: 14, textAlign: 'justify'}}>
           {dogDetails.porte}
          </Text>
        </View>
        <View style={{paddingTop: 8}}>
          <Text style={{fontFamily: 'MontserratBold', fontSize: 25}}>Sobre</Text>
          <Text style={{fontFamily: 'PoppinsRegular', fontSize: 14, textAlign: 'justify'}}>
            Cachorro resgatado na rua, agora vive feliz e ajuda a encontrar{' '}
            lares para outros animais abandonados. Um verdadeiro herói peludo!
          </Text>
        </View>
      </ScrollView>

      <View style={{paddingHorizontal: 15, justifyContent: 'flex-end', paddingBottom: '2%'}}>
      <Button onPress={handleOpenModal} title='ADOTAR'/>
      </View>
      </SafeAreaView>

      {
        visibleModal &&
        <AdotarDog
        onClose={handleCloseModal}
        visible={visibleModal}
        />
      }
    </View>
  )
}
