import React, { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, Image, View, SafeAreaView} from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
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
import { ToggleSignIn } from '../../components/ToggleSignIn';
import { Register } from '../Register';


const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
});

export function SignIn() {
  const { navigate } = useNavigation<propsStack>();
  const {handleSubmitSigIn, isLoading, switchAccessType, setSwitchAccessType} = useAuth();
  const [rememberPassword, setRememberPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<SignCredentials>({
    resolver: yupResolver(schema)
  });

  const handleRememberPassword = () => {
    setRememberPassword(state => !state)
  }

  const handleToggleRegister = () => setSwitchAccessType(1)
  const handleToggleSignIn = () => setSwitchAccessType(0)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ justifyContent: 'space-between', flex: 1 }}>

          {/* HEADER */}
          <View style={styles.containLogo}>
            <Image
              resizeMode='contain'
              style={styles.logo}
              source={require('../../../assets/logo1.png')}
            />
            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 25 }}>Adocão</Text>
            <View style={{ width: '100%' }}>
              <ToggleSignIn
                alterRegister={switchAccessType}
                registerToggle={handleToggleRegister}
                singInToggle={handleToggleSignIn} />
            </View>
          </View>

          <View style={{flex: 1, paddingTop: '10%'}}>
          {/* FORMULADRIO */}
          { switchAccessType == 0 ?
          <>
              <ControlledInput
                name="email"
                control={control}
                icon="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
              />
            <ControlledInput
              name="password"
              control={control}
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              error={errors.password}
            />
            <View style={styles.rememberPassView}>
              <Checkbox
                style={{ marginRight: 5 }}
                value={rememberPassword}
                onValueChange={handleRememberPassword}
                color={rememberPassword ? theme.COLORS.PRIMARY : undefined}
              />
              <Text style={styles.rememberPassword}>Lembra minha senha</Text>
            </View>
          </>
          :
           <Register />
          }
          </View>
          <View>{ }</View>

          {/* BOTÃO */}
          {
          switchAccessType == 0 &&
          <View>
            <Button
              title={
                isLoading ?
                  "Loading..."
                  : "Logar"
              }
              onPress={handleSubmit(handleSubmitSigIn)}
            />
          </View>
          }
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}