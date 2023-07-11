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
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  signIn: ({email, password}: SignCredentials) => void;
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

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {

    const auth = await AsyncStorage.getItem('otimaGestao@User');
    const auEdith = auth ? JSON.parse(auth) : '';
    setAuthData(auEdith as DB_USER);
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
        await AsyncStorage.setItem('otimaGestao@User', JSON.stringify(DB_OBJECT));
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
        signIn
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
