import React from 'react'

import { View, Text } from 'react-native'
import { TextInput, TextInputProps } from 'react-native-paper'
import theme from '../../../theme'

interface Props extends TextInputProps{
  name: string;
  // value: any
  // onchange: any
}

export function Input({name, ...rest}: Props){
  return(
    <TextInput
    {...rest}
    mode="outlined"
    label={name}

    placeholderTextColor={theme.COLORS.CAPTION_400}
    // selectionColor={theme.COLORS.PRIMARY} //Cor do marcador 
    outlineColor={theme.COLORS.BUTTON_NO_ACTIVE}  //cor do border sem focus
    activeUnderlineColor={theme.COLORS.BUTTON_NO_ACTIVE}

    textColor={theme.COLORS.TEXT}
    // underlineColor={theme.COLORS.ATTENTION}
    
    autoCapitalize='none'
    clearTextOnFocus={true}
    activeOutlineColor={theme.COLORS.OPEN} //Quando o input é focado
    style={{marginHorizontal: 15, borderColor: theme.COLORS.PRIMARY, marginVertical: 8}}
    theme={{roundness: 15}}
    caretHidden={true}
    
    // right={<TextInput.Affix text="/100" />}
  />
  )
}