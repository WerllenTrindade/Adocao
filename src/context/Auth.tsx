import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import { Alert } from 'react-native'
import { DB_USER } from '../dtos/typagem';
import { generateGuid } from '../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuthContextData {
  authData?: DB_USER;
  setAuthData: React.Dispatch<React.SetStateAction<DB_USER | undefined>>;
  
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  
  switchAccessType: 0 | 1
  setSwitchAccessType:React.Dispatch<React.SetStateAction<0 | 1>>;

  signIn: ({email, password}: SignCredentials) => void;
  handleSubmitSigIn: (resultado: any) => void;
}

export interface SignCredentials {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);


const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authData, setAuthData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [switchAccessType, setSwitchAccessType] = useState<0 | 1>(0);
  useEffect(() => {
    loadFromStorage();
  }, []);

  async function handleSubmitSigIn(data: any) {
    if(!switchAccessType){
      let email = data.email;
      let password = data.password;
      signIn({email, password})
    }else{
      register(data)
    }

  }

  async function loadFromStorage() {

    const auth = await AsyncStorage.getItem('adocao@User');
    const auEdith = auth ? JSON.parse(auth) : '';
    setAuthData(auEdith as DB_USER);
  }

  async function register(object: any){
    console.log('registrando ' + JSON.stringify(object))
  }
  
  async function signIn({ email, password }: SignCredentials) {
    try {
      setIsLoading(true);
      if(email != 'werllentrindade@hotmail.com'){
        setIsLoading(false);
        return Alert.alert('Atenção', 'Login invalido');
      }else if(password != '123456'){
        setIsLoading(false);
        return Alert.alert('Atenção', 'Senha invalida')  
      }else{
        const DB_OBJECT: DB_USER = {
          user: 'Werllen Trindade',
          email: 'Werllentrindade@hotmail.com',
          userName: 'Werllen Dev',
          hash_id: generateGuid(),
        };
  

        setAuthData(DB_OBJECT);
        await AsyncStorage.setItem('adocao@User', JSON.stringify(DB_OBJECT));
        setIsLoading(false);
        return DB_OBJECT;
      }

    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
        isLoading,
        setIsLoading,
        signIn,
        handleSubmitSigIn,
        switchAccessType,
        setSwitchAccessType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
