import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 15, 
    width: theme.SIZES.width
  },
  containInfo:{
    backgroundColor: theme.COLORS.BUTTON_NO_ACTIVE,
    borderRadius: 8, 
    width: (theme.SIZES.width / 4),
    height: (theme.SIZES.width / 11),
    alignItems: 'center'
  },
  textInfo: {
    color: theme.COLORS.WHITE,
    padding: 9,
    fontFamily: 'PoppinsSemiBold'
  }
})

export default styles