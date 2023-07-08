import React from 'react'

import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles'
import theme from '../../../theme';


export function ArrDetails(){
  return(
    <View style={styles.container}>
    <View style={styles.containInfo}>
      <Text style={styles.textInfo}> <MaterialCommunityIcons name="dna"/> Femea</Text>
    </View>
    <View style={styles.containInfo}>
      <Text style={styles.textInfo}>8 Aninhos</Text>
    </View>
    <View style={styles.containInfo}>
      <Text style={styles.textInfo}>15 Kg</Text>
    </View>
  </View>
  )
}