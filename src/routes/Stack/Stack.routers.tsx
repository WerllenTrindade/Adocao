
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PetHomeList } from '../../screens/PetHomeList';
import { DetailsPet } from '../../screens/DetailsPet';
import { propsNavigationStack } from '../Models';

const {Screen, Navigator} = createNativeStackNavigator<propsNavigationStack>();

export function ListPetStack(){

    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="PetHomeList" 
                component={PetHomeList}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Screen
                name="DetailsPet" 
                component={DetailsPet}
                options={{
                    gestureEnabled: false,
                    
                }}
            />
        </Navigator>
    )
}
