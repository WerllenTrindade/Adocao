import React, { memo, useEffect, useRef, useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import axios from 'axios';

import { styles } from './styles';
import Lottie from 'lottie-react-native';
import { Card } from 'react-native-paper';
import theme from '../../../theme';

export interface dogProps {
  id: number,
  nome: string,
  raca: string,
  peso: number,
  idade: number
}

interface Props extends TouchableOpacityProps {
  data: dogProps;
  navigate: () => void;
}
const CardDog = ({ data, navigate, ...rest }: Props) => {
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
    <Card style={styles.card}>
      <TouchableOpacity style={styles.TableStatusOpen} onPress={navigate} {...rest}>
        <View style={styles.Details}>
        {loading ? (
            <ActivityIndicator size="large" color="gray" />
          ) : (  
            <Image resizeMode='stretch' style={styles.img} source={{uri: image !=="" ? image : undefined }} />
          )}
           <Text allowFontScaling={false} style={styles.NameFechamento}>{data.nome}</Text>
        </View>

        <View style={styles.containBody}>
        <View style={styles.containDetailsDog}>
          <Text style={styles.titleDetails}>Idade </Text>
          <Text style={styles.textDetails}>{data.idade} anos</Text>
        </View>
        <View style={styles.containDetailsDog}>
          <Text style={styles.titleDetails}>Peso</Text>
          <Text style={styles.textDetails}>{data.peso} KG</Text>
        </View>
        <View style={styles.containRace}>
          <Text style={styles.race}>{data.raca}</Text>
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
      </TouchableOpacity>
    </Card>
  );
}

export default memo(CardDog)



