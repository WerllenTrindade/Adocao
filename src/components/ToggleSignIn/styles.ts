import { StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  container:{
    borderWidth: 0.5,
    borderColor: theme.COLORS.CAPTION_200
  },
  contain:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containToggle:{
    flex: 2,
    alignItems: 'center',
  },
  title:{
      paddingVertical: 12, 
      fontWeight: 'bold'
  }
})

export default styles