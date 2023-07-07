import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10, 
    paddingVertical: 8, 
    position: 'relative'
  },
  contain: {
    flexDirection: 'row',
    alignItems: 'flex-end', 
    paddingHorizontal: 10, 
    borderWidth: 0.5, 
    borderRadius: 5, 
    backgroundColor: theme.COLORS.BACKGROUND,
    borderColor: theme.COLORS.CAPTION_400, 
    justifyContent: 'space-between'
    },
    containLeft: {
      flexDirection: 'row', 
      alignItems: 'center'
    },
    img:{
      height: 100, 
      maxHeight: 100, 
      width: 100
    },
    containText: {
      paddingLeft: 5
    },
    textDog:{
      fontFamily: 'Regular',
      color:theme.COLORS.TEXT, 
      lineHeight: 20
    },
    titleDog:{
      fontFamily: 'SemiBold', 
      color:theme.COLORS.TITLE
    },
    button:{
      paddingBottom: 5
    }
});
