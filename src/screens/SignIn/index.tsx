import React, { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { View } from 'react-native'
import { ControlledInput } from '../../components/ControlledInput';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import theme from '../../theme';

type FormData = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
});

export function SignIn() {
  const [rememberPassword, setRememberPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: FormData) {
    console.log('dhqwudhqwu')
    console.log(data);
  }

  const handleRememberPassword = () => {
    setRememberPassword(state => !state)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={styles.containLogo}>
            <Image
            resizeMode='contain'
            style={styles.logo}
            source={require('../../../assets/logo1.png')}
            />
          <Text style={{fontFamily: 'Bold', fontSize: 35}}>Adocão</Text>
          </View>

          <View>
          <View style={{paddingBottom: 10}}>
          <ControlledInput
            name="email"
            control={control}
            icon="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />
          </View>
          <ControlledInput
            name="password"
            control={control}
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            error={errors.password}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            style={{marginRight: 5}}
            value={rememberPassword}
            onValueChange={handleRememberPassword}
            color={rememberPassword ? theme.COLORS.PRIMARY : undefined}
          />
          <Text style={{fontSize: 15, fontFamily: 'Regular', alignItems: 'flex-end', color: theme.COLORS.TITLE}}>Lembra minha senha</Text>
          </View>
          </View>
          <View>{}</View>
          <View>
          <Button
            title="Logar"
            onPress={handleSubmit(handleUserRegister)}
          />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}