import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerPet from './Drawer/Drawer.routes';
import { useAuth } from '../context/Auth';
import { AuthStack } from './Stack/Auth.routes';



export function Routers(){
  const {authData} = useAuth();
    
    return(
        <NavigationContainer independent={true}>
          {authData ? <DrawerPet/> : <AuthStack/> }
        </NavigationContainer>
    )
}