import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    labelContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: colors.textPrimary,
        fontSize: 15,
        fontStyle: 'italic'
    }
});
