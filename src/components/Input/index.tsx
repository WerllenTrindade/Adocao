import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { TextInput, View, Text } from 'react-native';
import { styles } from './styles';
import theme from '../../theme';

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ icon, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather
          name={icon}
          size={24}
          color={(isFocused || isFilled) ? theme.COLORS.PRIMARY : '#AEAEB3'}
        />
      </View>

      <TextInput
        style={styles.inputText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </View>
  );
}