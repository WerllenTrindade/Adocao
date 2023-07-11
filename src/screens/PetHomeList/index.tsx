import React, { useCallback, useEffect } from 'react';
import { Text, LogBox, SafeAreaView, View, FlatList } from 'react-native'
import { Action } from '../../components/Action';
import theme from '../../theme';

import styles from './styles';
import CardDog, { dogProps } from '../../components/Cards/CardDog';
import { pets } from '../../mock';
import { propsStack } from '../../routes/Models';
import { useNavigation } from '@react-navigation/native';
import useFetchRepos from '../../querys/repo';


export function PetHomeList() {
  const { navigate } = useNavigation<propsStack>();
  // const {data } = useFetchRepos();

  useEffect(() => {
    LogBox.ignoreLogs(
      ['Animated: `useNativeDriver`',
        'componentWillReceiveProps'
      ]);
  }, []);



  const handleDogDetails = async (item: dogProps) => {

    navigate('DetailsPet')
  }

  const cardListDogs = useCallback(
    ({ item }: any) => (
      <CardDog
        // navigate={() => }
        navigate={() => handleDogDetails(item)}
        data={item} />
    ), []);

  const keyExtractorDogCard = useCallback((item: any) => String(item.id), []);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader} />

      <View style={styles.containInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 16 }}>Filtro: </Text>
          <View style={{ backgroundColor: theme.COLORS.PRIMARY, borderRadius: 8 }}>
            <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: theme.COLORS.WHITE, paddingHorizontal: 8 }}>Todos</Text>
          </View>
        </View>
        <Text style={styles.textInfo}>{pets.length} Pets</Text>
      </View>
      
      <FlatList
        key={'#'}
        horizontal={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={21}
        initialNumToRender={9}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractorDogCard}
        data={pets}
        renderItem={cardListDogs}
        style={styles.containerList}
        contentContainerStyle={styles.list}
        numColumns={3}
      />

      <Action
        async={() => { }}
        like={() => { }}
      />
    </SafeAreaView>
  );
}