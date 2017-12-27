import { StyleSheet } from 'react-native';
import colors from './colors.style';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        backgroundColor: colors.darkBackground
    },
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: colors.lightBackground,
        height: 50,
        width: '100%'
    }
});
