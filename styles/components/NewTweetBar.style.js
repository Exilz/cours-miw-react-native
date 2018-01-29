import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.backgroundSecond
    },
    button: {
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 35,
        borderRadius: 5
    },
    activeButton: {
        backgroundColor: colors.support
    },
    buttonLabel: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    chars: {
        fontSize: 15,
        marginRight: 10,
        color: 'white'
    }
});
