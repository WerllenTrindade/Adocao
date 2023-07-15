import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F6',
    padding: 24,
    justifyContent: 'space-between'
  },
  containLogo:{
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 130,
  },
  rememberPassword:
  { 
    fontSize: 12, 
    fontFamily: 'PoppinsRegular', 
    alignItems: 'flex-end', 
    color: theme.COLORS.TITLE 
  },
  rememberPassView: {
    flexDirection: 'row',
     marginTop: 5, 
    alignItems: 'center'
  }
});