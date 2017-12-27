import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 30,
        color: colors.textSecond
    },
    activeIcon: {
        color: colors.support
    }
});
