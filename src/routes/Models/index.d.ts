import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack =  {
    Walcome: undefined | any;
    SignIn: undefined | any;
    
    PetHomeList: undefined | any;
    DetailsPet: undefined | any;
    Profile: undefined | any;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>