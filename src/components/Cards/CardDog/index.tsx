import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../../theme';
import { styles } from './styles';

interface dogProps {
  id: number,
  nome: string,
  raca: string,
  peso: number,
  idade: number
}

interface Props {
  data: dogProps;
}
export function CardDog({ data }: Props) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImage(response.data.message);

      console.log(response.data.message)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.contain}>
        <View style={styles.containLeft}>
        {loading ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (  
          <Image resizeMode='contain' style={styles.img} source={{uri: image !=="" ? image : undefined }} />
        )}
        <View style={styles.containText}>
          <Text style={styles.textDog}><Text style={styles.titleDog}>Nome:</Text> {data.nome}</Text>
          <Text style={styles.textDog}><Text style={styles.titleDog}>Idade:</Text> {data.idade}</Text>
          <Text style={styles.textDog}><Text style={styles.titleDog}>Peso:</Text> {data.peso}</Text>
          <Text style={styles.textDog}><Text style={styles.titleDog}>Raça:</Text> {data.raca}</Text>
        </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="ios-heart-outline" color={theme.COLORS.ATTENTION} size={25} />
        </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
}