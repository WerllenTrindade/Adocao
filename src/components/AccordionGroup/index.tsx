import React, { useRef, useState } from 'react'

import { View, Text, StyleSheet, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import theme from '../../theme';
import { LayoutAnimation } from 'react-native';
import { toggleAnimation } from './toggleAnimation';

interface Props {
  title: string;
  text: string
}

export function AccordionGroup({title, text}: Props){
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true
    }
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(state => !state);
  }

  const arrowTransform = animationController.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg', '90deg']
  })

  return(
    <View style={styles.container}>
    <TouchableOpacity onPress={() => toggleListItem()}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
        <MaterialIcons name={'keyboard-arrow-right'} size={30} />
        </Animated.View>
      </View>
    </TouchableOpacity>
   { showContent && 
   <View style={styles.body}>
      <Text style={{textAlign: 'justify'}}>{text}</Text>
    </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: '3%', 
      marginHorizontal: 8,
      borderRadius: 12, 
      backgroundColor: theme.COLORS.WHITE, 
      marginBottom: '2%', 
      overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  title:{
    fontSize: 14,
    color: '#2d2d2d',
    fontFamily: 'PoppinsRegular',
    // fontWeight: 'bold',
    width: '90%'
  },
  body:{
    paddingHorizontal: '2%',
    paddingVertical: '3%',
  }
})