import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import axios from 'axios';

import { styles } from './styles';
import Lottie from 'lottie-react-native';

interface dogProps {
  id: number,
  nome: string,
  raca: string,
  peso: number,
  idade: number
}

interface Props extends TouchableOpacityProps {
  data: dogProps;
}
export function CardDog({ data, ...rest }: Props) {
  const animation = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const isFirstRun = useRef(true)

  useEffect(() => {
    if(isFirstRun.current) {
    if(isLiked) {
      animation.current.play(66, 66)
    }else{
      animation.current.play(19, 19)
    }
    isFirstRun.current = false;
  }else if (isLiked){
    animation.current.play(19, 59)
  }else {
    animation.current.play(0, 19)
  }
  },[isLiked])

  useEffect(() => {
    fetchDogImage();
  }, []);
  const fetchDogImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImage(response.data.message);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <TouchableOpacity {...rest} style={styles.container}>
        <View style={styles.contain}>
        <View style={styles.containLeft}>
        {loading ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (  
          <Image resizeMode='contain' style={styles.img} source={{uri: image !=="" ? image : undefined }} />
        )}
        <View style={styles.containText}>
          <Text style={styles.titleDog}>{data.nome}</Text>
          <Text style={styles.textDog}><Text style={styles.titleDog}>Idade:</Text> {data.idade}</Text>
          <Text style={styles.textDog}><Text style={styles.titleDog}>Peso:</Text> {data.peso}</Text>
          <Text style={styles.textDog}><Text style={styles.titleDog}>Raça:</Text> {data.raca}</Text>
        </View>
        </View>

        <TouchableOpacity 
          onPress={() => setIsLiked(state => !state)} 
          style={styles.button}>
        <Lottie 
          ref={animation}
          source={require('../../../../assets/94181-like.json')}
          style={{width: 45, height: 45}}
          resizeMode='contain'
          autoPlay={true}
          loop={false} 
        />
        </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
}