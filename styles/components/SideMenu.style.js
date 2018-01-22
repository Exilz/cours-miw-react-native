import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.backgroundSecond
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10
    },
    username: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    smallText: {
        color: colors.textSecond,
        fontSize: 13
    },
    strongText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    },
    subscribersContainer: {
        paddingVertical: 10
    }
});
