import { StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    backgroundColor: theme.COLORS.BACKGROUND_CARD
  },
  containLogo:{
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    marginTop: '15%',
  },
  bodyInfo:{
    paddingLeft: 15
  },
  bodyTitle:{
    fontSize: 25,
    paddingBottom: 5,
    fontFamily: 'PoppinsSemiBold'
  },
  bodyText:{
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'PoppinsLight'
  },
  containButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '5%'
  },
  button:{
    backgroundColor: theme.COLORS.PRIMARY,
    borderRadius: 15
  },
  textButton:{
    fontWeight: '700',
    color: theme.COLORS.WHITE,
    fontSize: 20,
    paddingVertical: 15,
    paddingHorizontal: '25%'
  }

})

export default styles