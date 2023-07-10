import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.COLORS.PRIMARY,
    marginBottom: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    color: theme.COLORS.WHITE,
    fontFamily: 'PoppinsSemiBold',
    letterSpacing: 1
  },
});
