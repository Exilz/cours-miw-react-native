import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import TweetButtons from './TweetButtons';
import styles from '../styles/components/Tweet.style';

const TWEET = {
    id: 0,
    user: 'Utilisateur',
    nickname: 'Utilisateur',
    date: '5m',
    avatar: 'https://placeimg.com/150/150/animals',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida nulla vel justo iaculis, ut placerat erat mollis. Sed dapibus dolor eu nunc molestie, et imperdiet tortor lobortis. Nulla lorem neque, condimentum eget pulvinar ut, eleifend non nisi. Donec id lacus a risus scelerisque varius. Nunc gravida diam quis lorem tincidunt scelerisque',
    images: ['https://i.imgur.com/dHLmxfOl.jpg', 'https://i.imgur.com/gSmWCJFl.jpg']
};

export default class Tweet extends Component {

    get username () {
        return (
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>{ TWEET.nickname }</Text>
                <Text style={styles.userAccount}>@{ TWEET.user }</Text>
                <Text style={styles.tweetDate}>- { TWEET.date } </Text>
            </View>
        );
    }

    get tweetContent () {
        return (
            <Text style={styles.tweet}>
                { TWEET.content }
            </Text>
        );
    }

    get images () {
        if (!TWEET.images || !TWEET.images.length) {
            return false;
        }
        const images = TWEET.images.map((image, index) => {
            return (
                <Image
                  key={`${TWEET.id}-image-${index}`}
                  source={{ uri: image }}
                  style={styles.image}
                />
            );
        });
        return (
            <View style={styles.imageContainer}>
                { images }
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={{ uri: TWEET.avatar }} />
                </View>
                <View style={styles.contentContainer}>
                    { this.username }
                    { this.tweetContent }
                    { this.images }
                    <TweetButtons />
                </View>
            </View>
        );
    }
}
