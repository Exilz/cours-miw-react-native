import { StyleSheet } from 'react-native';
import colors from '../colors.style';

export default StyleSheet.create({
    container: {
        minHeight: 100,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black'
    },
    avatarContainer: {
        width: 100,
        // backgroundColor: 'blue',
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1,
        paddingVertical: 10
        // backgroundColor: 'red'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    usernameContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    username: {
        color: colors.textPrimary,
        fontWeight: 'bold',
        marginRight: 10
    },
    userAccount: {
        color: colors.textSecond,
        marginRight: 10
    },
    tweetDate: {
        color: colors.textSecond
    },
    tweet: {
        color: colors.textPrimary,
        fontSize: 17,
        lineHeight: 25,
        marginBottom: 10
    },
    image: {
        aspectRatio: 1,
        width: '45%',
        marginRight: 5,
        marginBottom: 5,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
