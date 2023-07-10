import { StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  containBody: {
    alignItems: 'center', 
    paddingTop: 15
  },
  image:{
    height: 250,
    maxWidth: '90%'
  },
  name: {
    fontSize: 25,
    fontFamily: 'PoppinsBold',
    color: theme.COLORS.TITLE,
    letterSpacing: 1.5,
    paddingBottom: 8
  },
  race:{
    fontFamily: 'MontserratRegular',
    paddingTop: 2,
    color: theme.COLORS.CAPTION_500,
    alignSelf: 'flex-end',
    paddingRight: 30
  },
})

export default styles