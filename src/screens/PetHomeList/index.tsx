import React, { useCallback, useEffect, useState } from 'react';
import { Text, LogBox, SafeAreaView, View, FlatList } from 'react-native'
import { Action } from '../../components/Action';
import theme from '../../theme';

import styles from './styles';
import CardDog from '../../components/Cards/CardDog';
import { useQuery } from '@tanstack/react-query';
import { propsStack } from '../../routes/Models';
import { useNavigation } from '@react-navigation/native';
import { DogsProps, useDog } from '../../context/Dog';
import axios from 'axios';
import api from '../../services/api';

import { pets } from '../../mock';

export function PetHomeList() {
  const { navigate } = useNavigation<propsStack>();
  const { setDogDetails } = useDog();
  const [listDog, setListDog] = useState([])
  const { data, dataUpdatedAt } = useQuery<DogsProps[]>(['listdog'], async () => {
    
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')

    return response.data
  });
  

  useEffect(() => {
    LogBox.ignoreLogs(
      ['Animated: `useNativeDriver`',
        'componentWillReceiveProps'
      ]);
  }, []);

  useEffect(() => {
    const fetchDogImages = async () => {
      const updatedListDog: any = [];
  
      if (data) {
        for (let i = 0; i < pets.length; i++) {
          try {
            const response = await axios.get(
              `https://dog.ceo/api/breeds/image/random`
            );
            const image = response.data.message;
  
            updatedListDog.push({ ...pets[i], image });
          } catch (error) {
            console.error(`Failed to fetch image for ${pets[i].raca}: ${error}`);
          }
        }
  
        console.log('DQWJIDJQWQW ' + JSON.stringify(updatedListDog))
        setListDog(updatedListDog);
      }
    };
  
    fetchDogImages();
  }, [data]);


  const handleDogDetails = async (item: DogsProps) => {
    setDogDetails(item)
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
        data={listDog}
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