import React  from 'react'
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import theme from '../../theme';
import { DrawerContent } from './DrawerContent';
import { PetHomeList } from '../../screens/PetHomeList';
import { Profile } from '../../screens/Profile';
import { DetailsPet } from '../../screens/DetailsPet';
const {Navigator, Screen} = createDrawerNavigator();

export default function DrawerPet() {
  return (
      <Navigator drawerContent={(props) => <DrawerContent {...props}/>}
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle:{
          color: theme.COLORS.WHITE, 
          fontFamily: 'PoppinsRegular', 
          letterSpacing: 1,
          fontSize: 20
        },
        headerStyle: {
          backgroundColor: theme.COLORS.PRIMARY,
          shadowColor: theme.COLORS.PRIMARY,
          height: 60,
          borderBottomColor: 'transparent',
          borderBottomWidth: 0,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        },
        headerTitleAlign: 'center',
        drawerStyle: {
          backgroundColor: theme.COLORS.BACKGROUND,
          width: 240,
        },
        drawerLabelStyle:{
          color: theme.COLORS.TITLE,
          fontFamily: 'PoppinsRegular',
        },
        drawerActiveTintColor: theme.COLORS.PRIMARY,
        
      }}>
        <Screen
        options={{
          title: 'HOME',
          // headerShown: true
          }}
        name="ListPetStack" 
        component={PetHomeList} />
        <Screen name="Profile" component={Profile} />
        <Screen
        options={{
          headerShown: false,
        }}
        name="DetailsPet" component={DetailsPet} />
      </Navigator>
  );
}