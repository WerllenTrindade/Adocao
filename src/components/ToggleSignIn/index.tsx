import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import theme from '../../theme'
import styles from './styles';

interface Props {
  alterRegister: number,
  singInToggle: () => void;
  registerToggle: () => void;
}

export function ToggleSignIn({alterRegister, singInToggle, registerToggle}: Props){
  return(

      <View style={styles.container}>
          <View style={styles.contain}>
          <TouchableOpacity onPress={singInToggle} style={[
            styles.containToggle, 
            {borderTopLeftRadius: 8, borderBottomLeftRadius: 8},
            alterRegister != 1
            ? {backgroundColor: theme.COLORS.PRIMARY} 
            : {backgroundColor: theme.COLORS.WHITE}]}>
            <Text style={[
              styles.title,
              alterRegister != 1 ? {color: theme.COLORS.WHITE}
              : {color: theme.COLORS.PRIMARY}
              ]}>
              Logar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={registerToggle} style={[
            styles.containToggle, 
            {borderTopRightRadius:8, borderBottomRightRadius: 8},
            alterRegister != 0
            ? {backgroundColor: theme.COLORS.PRIMARY} 
            : {backgroundColor: theme.COLORS.WHITE}]}>
            <Text style={[
              styles.title,
              alterRegister != 0? {color: theme.COLORS.WHITE}
              : {color: theme.COLORS.PRIMARY}
              ]}>
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

  )
}