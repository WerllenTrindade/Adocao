import React, {useState } from 'react';
import styles from './styles';
import { ModalProps, 
        Modal, 
        Platform, 
        KeyboardAvoidingView, 
        View, 
        TouchableOpacity, 
        Text, 

        } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../routes/Models';
import theme from '../../../theme';
interface DataProps extends ModalProps {
    onClose: () => void;
}

export function AdotarDog({ onClose, ...rest}: DataProps){
  const { navigate } = useNavigation<propsStack>(); 


  async function handleConfirm(item: any){

    }

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Modal
        animationType='slide'
        transparent
        statusBarTranslucent
        {...rest}>
            <View style={styles.Container}>
                <View style={styles.Content}>
                    <TouchableOpacity style={styles.CloseButton} onPress={onClose}>
                        <AntDesign
                        name="close"
                        size={25}
                        color='#71717A'
                        />

                    </TouchableOpacity>
                    <View style={{justifyContent: 'space-between'}}>
                <View style={{ 
                  position: 'absolute', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  flex:1, 
                  right: '36%', 
                  top: -90, 
                  backgroundColor: theme.COLORS.OPEN, 
                  borderRadius: 80}}>
                  <AntDesign
                        name="check"
                        size={55}
                        style={{padding: 15}}
                        color={theme.COLORS.WHITE}
                        />
                </View>
                        <View style={styles.PrimaryColumn}>
                          <Text style={{fontSize: 25, fontFamily: 'MontserratRegular'}}>Parece que você e Bia</Text>
                          <Text style={{fontSize: 25, fontFamily: 'MontserratRegular'}}>combinam bastante!</Text>
                            <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 25, fontFamily: 'MontserratRegular'}}>Antes de enviar a solicitação, precisamos de um pouco mais de informações sobre você.</Text>
                        </View>
                        <View style={{}}>
                        </View>
                        <TouchableOpacity style={styles.ConfirmarModalButton}
                        onPress={() =>{}}>
                            <Text allowFontScaling={false} style={styles.ConfirmModalText}>SEGUIR</Text>
                        </TouchableOpacity>
                    </View>
                </View >          
            </View>
        </Modal>
        </KeyboardAvoidingView>
    )
}