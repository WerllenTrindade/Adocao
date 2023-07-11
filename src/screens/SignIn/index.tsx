import React, { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { View } from 'react-native'
import { ControlledInput } from '../../components/ControlledInput';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import theme from '../../theme';
import { SignCredentials, useAuth } from '../../context/Auth';
import { ActivityIndicator } from 'react-native-paper';
import { propsStack } from '../../routes/Models';
import { useNavigation } from '@react-navigation/native';


const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
});

export function SignIn() {
  const { navigate } = useNavigation<propsStack>();
  const { signIn, isLoading } = useAuth();
  const [rememberPassword, setRememberPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<SignCredentials>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: any) {
    const email = data.email
    const password = data.password
    signIn({email, password});
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
          <Text style={{fontFamily: 'PoppinsBold', fontSize: 35}}>Adocão</Text>
          </View>

          <View>
          <View style={{paddingBottom: 5}}>
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
          <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
          <Checkbox
            style={{marginRight: 5}}
            value={rememberPassword}
            onValueChange={handleRememberPassword}
            color={rememberPassword ? theme.COLORS.PRIMARY : undefined}
          />
          <Text style={{fontSize: 12, fontFamily: 'PoppinsRegular', alignItems: 'flex-end', color: theme.COLORS.TITLE}}>Lembra minha senha</Text>
          </View>
          </View>
          <View>{}</View>
          <View>
          <Button
            title={
              isLoading ?
            "Loading..."
            : "Logar"
            }
            onPress={handleSubmit(handleUserRegister)}
          />
          <TouchableOpacity
          onPress={() => navigate('Register')} 
          style={{
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: theme.COLORS.PRIMARY,
            }}>
            <Text 
            style={{
              color: theme.COLORS.PRIMARY,
              paddingVertical: 12,
              fontFamily: 'PoppinsSemiBold'
              }}>Cadastrar</Text>
          </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}