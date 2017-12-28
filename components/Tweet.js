import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import TweetButtons from './TweetButtons';
import styles from '../styles/components/Tweet.style';

export default class Tweet extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        images: PropTypes.array,
    }

    get username () {
        return (
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>{ this.props.nickname }</Text>
                <Text style={styles.userAccount}>@{ this.props.user }</Text>
                <Text style={styles.tweetDate}>- { this.props.date } </Text>
            </View>
        );
    }

    get tweetContent () {
        return (
            <Text style={styles.tweet}>
                { this.props.content }
            </Text>
        );
    }

    get images () {
        if (!this.props.images || !this.props.images.length) {
            return false;
        }
        const images = this.props.images.map((image, index) => {
            return (
                <Image
                  key={`${this.props.id}-image-${index}`}
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
                    <Image style={styles.avatar} source={{ uri: this.props.avatar }} />
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
