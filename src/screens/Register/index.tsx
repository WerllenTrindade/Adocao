import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Form } from '../../components/Form';
import { HeaderLogin } from '../../components/HeaderLogin';
import { styles } from './styles';
import { View} from 'react-native'

export function Register() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
         <HeaderLogin/>
          <Form />
        </>
      </TouchableWithoutFeedback>
    </View>
  );
}