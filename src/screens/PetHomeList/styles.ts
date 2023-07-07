import { StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  containerHeader : {
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: theme.COLORS.PRIMARY,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    // paddingStart: '5%',
    // paddingEnd: '5%',
    // paddingTop: '0.5%',
},
title:{
  color: theme.COLORS.WHITE,
  fontFamily: 'Regular',
  fontSize: 20,
  paddingVertical: 15,
  paddingHorizontal: 25
  },
  containInfo:{
    flexDirection: 'row', 
    paddingTop: 5, 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10
  },
  textInfo:{
    fontFamily: 'Regular', 
    fontSize: 18
  }

})

export default styles