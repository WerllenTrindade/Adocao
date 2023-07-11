
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Walcome } from '../../screens/Walcome';
import { SignIn } from '../../screens/SignIn';
import { propsNavigationStack } from '../Models';
import { ListPetStack } from './Stack.routers';
import { Register } from '../../screens/Register';



const { Screen, Navigator } = createNativeStackNavigator<propsNavigationStack>();

export function AuthStack() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <> 
                    <Screen
                        name={"Walcome"}
                        component={Walcome}
                        options={{
                            gestureEnabled: false
                        }}
                    />
                    <Screen
                        name={"SignIn"}
                        component={SignIn}
                        options={{
                            gestureEnabled: false
                        }}
                    />
                    <Screen
                        name={"Register"}
                        component={Register}
                        options={{
                            gestureEnabled: false
                        }}
                    />
                <Screen
                    name="PetHomeList"
                    component={ListPetStack}
                    options={{
                        gestureEnabled: false
                    }}
                />
                </>
        </Navigator>
    )
}