import { StyleSheet, Dimensions } from 'react-native';

// const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
    }, 
    ConfirmarModalButton: {
        width: '100%',
        backgroundColor: '#0059ec',
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },  
    Content: {
        width: '100%',
        backgroundColor: '#F0F2F5',
        borderRadius: 8,
        paddingHorizontal: 20,
        // height: (width / 1)
 
    }, 
    CloseButton: {
        alignSelf: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 1,
    },
    ConfirmModalText: {
        paddingVertical: 15,
        color: '#F0F2F5',
        fontFamily: 'MontserratRegular',
    },
    TextTitle: {
        fontSize: 16,
        fontFamily: 'MontserratRegular',
        color: '#121214',
    },
    PrimaryColumn: {       
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 80
    },
    ProductAmountControl: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ProductAmount: {
        textAlign: 'center',
        width: 28,
        fontSize: 15,
        color: '#121214',
    },
    ObservationField: {
        borderRadius: 8,
        backgroundColor: '#f9fafd',
        // border: 05),
        height: 150,
        marginVertical: 10,
        
    },
    Observation: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        height: 250,
        fontFamily: 'MontserratRegular',
        color: '#71717A',
    },
    TextAdditional: {
        fontSize: 16,
        fontFamily: 'MontserratRegular',
        color: '#121214',
    },
    TextObservation: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'MontserratRegular',
        color: '#121214',
    },
    ColumnTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    TextValueProduct: {
        fontSize: 25,
        fontFamily: 'MontserratRegular',
        color: '#0059ec',
    },
    TextTotalProduct: {
        fontSize: 16,
        fontFamily: 'MontserratRegular',
        color: '#0059ec',
    },

})

export default styles