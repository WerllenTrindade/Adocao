import { StyleSheet } from 'react-native';
import theme from '../../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

const heigthCard = (theme.SIZES.width - 10) / 2 + 15

export const styles = StyleSheet.create({
    card:{
      width: (theme.SIZES.width - 30) / 3,
      height: (theme.SIZES.width - 10) / 2 + 15,
      marginHorizontal: 3,
      marginBottom: 15,
      position: 'relative',
    },
    img:{
      height: 100,  
      width: 250,
      maxHeight: 150,
      maxWidth: (theme.SIZES.width - 30) / 3
    },
    containBody:{flex: 1, width: '100%'
  },
    button:{
      bottom: -10,
      position: 'absolute', 
      right: -8
    },
    Details:{
        // flex: 1,
        alignItems: 'center',
    },
      TableStatusOpen: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: heigthCard
      },

      NameFechamento:{
        fontSize: 15,
        fontFamily: 'PoppinsSemiBold',
        alignItems: 'center',
        justifyContent: 'center'
      },
      cardHiden: {
        flex: 1,
        marginHorizontal: 3,
        marginVertical: 3,
        opacity: 0
      },
      containDetailsDog:
      {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8
      },
      titleDetails:
      {
        fontFamily: 'PoppinsSemiBold', 
        fontSize: 12
      },
      textDetails:
      {
        fontFamily: 'PoppinsRegular', 
        fontSize: 12
      },
      containRace: {
      justifyContent: 'center', 
        paddingTop: 5, 
        alignItems: 'center',
        paddingHorizontal: 8
      },
      race:{
        fontFamily: 'PoppinsSemiBold', 
        fontSize: 12, 
        color: theme.COLORS.PRIMARY
      }
});
