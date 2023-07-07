import { StyleSheet } from 'react-native'
import theme from '../../theme';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerText: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.COLORS.TITLE
  },
  text: {
    fontSize: 15,
    color: theme.COLORS.OVERLEY,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  content: {
    paddingRight: 10,
    backgroundColor: theme.COLORS.WHITE,
  },
  containerScrollView:{
    flex: 1,
    overflow: 'hidden',
    paddingHorizontal: 12,
  }
});

export default styles