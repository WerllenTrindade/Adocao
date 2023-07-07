import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'



import theme from "../../theme";


interface Props {
  title: string;
}

export function Header({ title }: Props) {


  return (
    <View style={styles.container}>
        <View style={styles.contain}>
          {/* <Text style={styles.text}>{title}</Text> */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {

    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',

  },
  text: {
    color: theme.COLORS.WHITE, 
    fontFamily: 'Poppins', 
    letterSpacing: 1,
    fontSize: 20
  }
})