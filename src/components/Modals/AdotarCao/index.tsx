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

export function AdotarCao({ onClose, ...rest}: DataProps){
  const { navigate } = useNavigation<propsStack>(); 
  const optionsPedido = [ 
    { id: 1, 
    text: 'Pedido Indoor',
    description: 'Este pedido deve ser realizado dentro do seu estabelecimento, para ser importado pelo PDV'}, 
    { id: 2, 
    text: 'Pedido OutDoor',  
    description: 'Este pedido deve ser realizado enquanto estiver fora do seu estabelecimento'}]

  const [checkboxPrintCashier, setCheckboxPrintCashier] = useState([]);


  async function handleConfirm(item: any){
    // await AsyncStorage.removeItem('pedido');

    // navigate('SelectProduct')
    // setVisibleModal(false)
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
                        </View>
                        <TouchableOpacity style={styles.ConfirmarModalButton}
                        onPress={() =>{}}>
                            <Text allowFontScaling={false} style={styles.ConfirmModalText}>CONFIRMAR</Text>
                        </TouchableOpacity>
                    </View>
                </View >          
            </View>
        </Modal>
        </KeyboardAvoidingView>
    )
}