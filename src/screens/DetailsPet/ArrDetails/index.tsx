import React from 'react'

import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles'
import theme from '../../../theme';

interface Props {
  sexo: string
  idade: number
  peso: number
}

export function ArrDetails({idade, peso, sexo}: Props){
  return(
    <View style={styles.container}>
    <View style={styles.containInfo}>
      <Text style={styles.textInfo}> <MaterialCommunityIcons name="dna"/>{sexo}</Text>
    </View>
    <View style={styles.containInfo}>
      <Text style={styles.textInfo}>{idade} Aninhos</Text>
    </View>
    <View style={styles.containInfo}>
      <Text style={styles.textInfo}>{peso} Kg</Text>
    </View>
  </View>
  )
}