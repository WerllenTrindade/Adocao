import React, { useEffect } from 'react';
import { Text, LogBox, SafeAreaView, View, FlatList } from 'react-native'
import { Action } from '../../components/Action';
import theme from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { CardDog } from '../../components/Cards/CardDog';
import { pets } from '../../mock';


export function PetHomeList() {

  useEffect(() => {
    LogBox.ignoreLogs(
      ['Animated: `useNativeDriver`',
       'componentWillReceiveProps'
      ]);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}/>

        <View style={styles.containInfo}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Regular', fontSize: 16}}>Filtro: </Text>
          <View style={{backgroundColor: theme.COLORS.PRIMARY, borderRadius: 8}}>
          <Text style={{fontFamily: 'Regular', fontSize: 14, color: theme.COLORS.WHITE, paddingHorizontal: 8}}>Todos</Text>
          </View>
          </View>
          <Text style={styles.textInfo}>{pets.length} Pets</Text>
        </View>

        <FlatList
        keyExtractor={item => item.id.toString()}
        data={pets}
        renderItem={({ item, index }) =>
        <CardDog
          data={item}
        />
      }
        />

      <Action
        async={() => { }}
        like={() => { }}
      />
    </SafeAreaView>
  );
}