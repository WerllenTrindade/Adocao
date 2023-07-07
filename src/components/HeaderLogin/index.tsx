import React from 'react';
import { View, Text } from 'react-native'
import { styles } from './styles';

export function HeaderLogin() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Crie sua{'\n'}conta
      </Text>

      <Text style={styles.subtitle}>
        Faça seu cadastro de{'\n'}
        forma rápida e fácil
      </Text>
    </View>
  )
}