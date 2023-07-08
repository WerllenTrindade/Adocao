import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from "../../theme";


interface Props {
  title: string;
  onClose: () => void;
}

export function Header({ title, onClose }: Props) {

  return (
    <View style={styles.container}>
        <View style={styles.contain}>
        <TouchableOpacity onPress={onClose}>
            <AntDesign
              name='left'
              size={20}
              color={theme.COLORS.WHITE}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{title}</Text>
          <AntDesign
              name='left'
              size={20}
              color='transparent'
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: theme.COLORS.PRIMARY,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: 15
  },
  text: {
    color: theme.COLORS.WHITE, 
    fontFamily: 'Poppins', 
    letterSpacing: 1,
    fontSize: 20
  }
})