import React from 'react'
import{ View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { propsStack } from '../../routes/Models';
import { useNavigation } from '@react-navigation/native';

export function Walcome(){
  const { navigate } = useNavigation<propsStack>();

  async function handleConfirmWalcome() {
    navigate('SignIn');
  }

  return(
      <View style={styles.container}>
          <View style={styles.containLogo}>
            <Image
            resizeMode='contain'
            style={styles.logo}
            source={require('../../../assets/logo1.png')}
            />
          </View>

          <View style={styles.bodyInfo}>
            <Text style={styles.bodyTitle}>Bem-vindo(a) ao Adocão</Text>
            <Text style={styles.bodyText}>
            Abra as portas do seu coração{"\n"}
            e adote um amigo de quatro patas.
            </Text>
          </View>

          <View style={styles.containButton}>
            <TouchableOpacity 
            onPress={handleConfirmWalcome}
            style={styles.button}>
              <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
}