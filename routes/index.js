import React from 'react';
import { StackNavigator } from 'react-navigation';
import HeaderAvatar from '../components/HeaderAvatar';
import NewTweetButton from '../components/NewTweetButton';
import headerStyles from '../styles/components/Header.style';
import MainView from '../views/MainView';
import NewTweet from '../views/NewTweet';

const DEFAULT_NAV_OPTIONS = (navigation) => ({
    ...headerStyles,
    headerRight: <NewTweetButton navigation={navigation} />
});

export default StackNavigator({
    Home: {
        screen: MainView,
        navigationOptions: ({ navigation }) => ({
            title: 'Accueil',
            headerLeft: <HeaderAvatar />,
            ...DEFAULT_NAV_OPTIONS(navigation)
        })
    },
    NewTweet: {
        screen: NewTweet,
        navigationOptions: ({ navigation }) => ({
            ...DEFAULT_NAV_OPTIONS(navigation),
            headerRight: null
        })
    }
});
