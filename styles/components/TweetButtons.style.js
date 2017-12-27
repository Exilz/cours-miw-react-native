import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    icon: {
        color: colors.textSecond,
        fontSize: 25
    },
    rtCount: {
        color: colors.textSecond,
        fontSize: 16,
        marginLeft: 5
    }
});
