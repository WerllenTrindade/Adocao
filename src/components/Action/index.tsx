import React from 'react'
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';

interface Props {
  async: () => void;
  like: () => void;
}

export function Action({async, like }: Props){
  return(
    <ActionButton 
    bgOpacity={0.5}  
    size={50} 
    hideShadow={true} 
    buttonColor={theme.COLORS.PRIMARY} 
    style={{ position: 'absolute', right: -15, bottom: -10 }}>

    <ActionButton.Item textContainerStyle={{
      backgroundColor: 'transparent',
      borderWidth: 0,
      right: 75
    }}
      textStyle={{
        fontFamily: 'PoppinsSemiBold',
        color: theme.COLORS.TITLE,
        letterSpacing: 0.5,
        fontSize: 14,

      }}
      buttonColor={
        theme.COLORS.OPEN
      } title="Sincronizar" size={40} onPress={async}>
      <Icon name="reload-sharp" style={styles.actionButtonIcon} />
    </ActionButton.Item>

    <ActionButton.Item
      textContainerStyle={{
        backgroundColor: 'transparent',
        borderWidth: 0,
        right: 75
      }}
      textStyle={{
        fontFamily: 'PoppinsSemiBold',
        color: theme.COLORS.TITLE,
        letterSpacing: 0.5,
        fontSize: 14,
      }}
      buttonColor={
        theme.COLORS.ATTENTION
      } title="Like" size={40} onPress={like}>
      <Icon name="ios-heart-outline" style={styles.actionButtonIcon} />
    </ActionButton.Item>

  </ActionButton>
  )
}

const styles = StyleSheet.create({
  actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: theme.COLORS.WHITE,
  },
});