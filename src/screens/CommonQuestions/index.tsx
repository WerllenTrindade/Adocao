import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';

import theme from '../../theme';
import { AccordionGroup } from '../../components/AccordionGroup';
import { questions } from '../../utils/CommonQuestionUtil';

export function CommonQuestions() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
      data={questions}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <AccordionGroup 
        title={item.title} 
        text={item.text}/>
      )}
      contentContainerStyle={{
        paddingTop: 15,
        paddingHorizontal: 5
      }}
      />
    </SafeAreaView>
  )
}