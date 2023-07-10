import React, { useState } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar, List, TextInput } from 'react-native-paper';
import theme from '../../theme';
import { Input } from './Input';
import { maritalStatus } from '../../utils/utils';
import Entypo from 'react-native-vector-icons/Entypo';


interface objectForm {
  name: string;
  email: string;
  senha: string;
  documento: string;
}

export function Profile() {
  const [expanded, setExpanded] = React.useState(true);
  const [onEye, setOnEye] = useState(false);
  const [dataProfile, setDataProfile] = useState<objectForm>({
    name: 'Werllen Trindade Ferreira',
    email: 'werllentrindade@hotmail.com',
    senha: 'werllen',
    documento: '144.195.047-81'
  })

  const handlePress = () => setExpanded(!expanded);


  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', paddingTop: 15, paddingBottom: 35 }}>
        <Avatar.Image
          size={150}
          source={require('../../../assets/avatar.png')} />
        <TouchableOpacity style={{ paddingTop: 15 }}>
          <Text style={{ fontFamily: 'PoppinsRegular', color: theme.COLORS.PRIMARY, fontWeight: '500' }}>Alterar Foto de perfil</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Input
          value={dataProfile.name}
          onChangeText={(value: string) => setDataProfile({ ...dataProfile, name: value })}
          name='Nome'
          placeholder='Adicione um nome'
        />
        <Input
          value={dataProfile.email}
          onChangeText={(value: string) => setDataProfile({ ...dataProfile, email: value })}
          name='E-mail'
          placeholder='Adicione um Email'
        />

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '45%' }}>
            <Input
              value={dataProfile.documento}
              onChangeText={(value: string) => setDataProfile({ ...dataProfile, documento: value })}
              name='Documento'
              placeholder='Adicione uma senha'
            />
          </View>

          <View style={{ width: '55%' }}>
          <Input
              value={dataProfile.senha}
              onChangeText={(value: string) => setDataProfile({ ...dataProfile, senha: value })}
              name='Senha'
              placeholder='Adicione uma senha'
              secureTextEntry
              enablesReturnKeyAutomatically  
              right={
               <TextInput.Icon 
               onPress={() => setOnEye(state => !state)}
               icon={onEye ? "eye-off" : "eye" } />
              }
            />
          </View>
        </View>

      </View>
    </View>
  )
}