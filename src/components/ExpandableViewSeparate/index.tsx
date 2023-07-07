import React, { useState, useEffect} from 'react';
import {
    LayoutAnimation,
    View,
    Text,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
    Animated,
    SafeAreaView
  } from 'react-native';
import { RouterDrawer, RouterDrawerItem } from '../../utils/router';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Easing } from 'react-native-reanimated';
import styles from './styles';
import theme from '../../theme';

interface ExpandableItemProps {
  item: RouterDrawerItem;
  onClickFunction: () => void;
  navigation: any;
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const ExpandableItemComponent = ({
    item, 
    onClickFunction, 
    navigation
  }: ExpandableItemProps) => {
  const [layoutHeight, setLayoutHeight] = useState<number | null>(null);
  const [rotateValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (item.isExpanded && item.itemCount === 1) {
      animateItem(1, null);
    } else {
      animateItem(0, 0);
    }
  }, [item.isExpanded]);

  const animateItem = (toValue: number, layoutHeight: any) => {
    Animated.timing(rotateValue, {
      toValue,
      duration: 300,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start(() => {
      setLayoutHeight(layoutHeight);
    });
  };

const rotateInterpolate = rotateValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '90deg'],
});

const animatedStyle = {
  transform: [{ rotate: rotateInterpolate }],
};

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          item.itemCount == 0 ? 
          () => navigation.navigate(item.route) 
          : onClickFunction
        }
        style={styles.header}
      >
        <Text style={styles.headerText}>{item.categoryName}</Text>
        <Animated.View style={animatedStyle}>
          <AntDesign name="right" size={15} color={theme.COLORS.OVERLEY} />
        </Animated.View>
      </TouchableOpacity>
      <SafeAreaView
        style={[styles.containerScrollView, {height: layoutHeight!}]}
      >
        <ScrollView>
        {item.subcategory.map((subItem: any) => (
          <TouchableOpacity
            key={subItem.id}
            style={styles.content}
            onPress={() => navigation.navigate(subItem.subRoute)}
          >
            <Text style={styles.text}>{subItem.val}</Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export const ExpandableViewSeparate = ({ navigation }: any) => {
  const [listDataSource, setListDataSource] = React.useState(RouterDrawer);

  const updateLayout = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array[index].isExpanded = !array[index].isExpanded;
    setListDataSource(array);
  };

  return (
    <View style={styles.container}>
        {listDataSource.map((item: any, key) => (
          <ExpandableItemComponent
          key={item.categoryName}
          onClickFunction={() => updateLayout(key)}
          item={item}
          navigation={navigation}
        />
        ))}
    </View>
  );
};


