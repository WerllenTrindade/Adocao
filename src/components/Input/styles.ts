import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  iconContainer: {
    height: 56,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    backgroundColor: '#FFFFFF',
  },
  inputText: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#7A7A80',
    padding: 0,
    paddingHorizontal: 23,
  },
  focused: {
    borderBottomWidth: 2,
    borderBottomColor: theme.COLORS.PRIMARY,
  },
});
