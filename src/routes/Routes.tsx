import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerPet from './Drawer/Drawer.routes';



export function Routers(){

    return(
        <NavigationContainer independent={true}>
          {/* {authData ? <DrawerNavi/> : <AuthStack/> } */}
          <DrawerPet/>
        </NavigationContainer>
    )
}