import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  LayoutAnimation,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation, DrawerActions  } from '@react-navigation/native';
import { RouterDrawer } from '../../utils/router';
import { ExpandableItemComponent } from '../../components/ExpandableViewSeparate';
import theme from '../../theme';


export const DrawerContent = (props: any) => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [listDataSource, setListDataSource] = React.useState(RouterDrawer);


  async function handleOnClose() {
    setLoading(true)
    // setAuthData(undefined);
    setLoading(false)
  }

  const updateLayout = (index: number) => {
    console.log(index)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array[index].isExpanded = !array[index].isExpanded;
    setListDataSource(array);
  };


  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.colorContainer}>
        <ImageBackground
          source={require('../../../assets/marca1.png')}
          style={styles.paddImg}>
          <Text
            style={styles.user}>
            Werllen Trindade
          </Text>
          <View>
            <Text
              style={styles.email}>
            Werllentrindade@hotmail.com
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.flatList}>
        {listDataSource.map((item: any, key) => (
              <ExpandableItemComponent
              key={item.categoryName}
              onClickFunction={() => updateLayout(key)}
              item={item}
              navigation={props.navigation}
            />
        ))}
        </View>
      </DrawerContentScrollView>
      <View style={styles.containerOut}>
        <TouchableOpacity disabled={loading} onPress={handleOnClose}>
          <View style={styles.containOut}>
            <Ionicons 
            name="exit-outline"
            color={theme.COLORS.ATTENTION} 
            size={22} />
            <Text style={styles.textOut}>
             {loading ? 'DESLOGANDO...' : 'SAIR'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  colorContainer:{
    backgroundColor: theme.COLORS.PRIMARY
  },
  paddImg:{
    padding: 15
  },
  user:{
    marginTop: 55,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'SemiBold',
    marginBottom: 5
  },
  email:{
    color: '#fff',
    fontFamily: 'Regular',
    // marginRight: 5,
    fontSize: 13
  },
  flatList:{
    flex: 1, 
    backgroundColor: '#fff', paddingTop: 10
  },
  containerOut:{
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  containOut:{
    flexDirection: 'row',
    alignItems: 'center'
},
textOut:{
  marginLeft: 5,
  color: theme.COLORS.ATTENTION,
  fontFamily: 'Regular'
}
})