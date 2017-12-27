import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Tweet from './Tweet';
import styles from '../styles/components/TweetButtons.style';

export default class TweetButtons extends Component {

    get comment () {
        return (
            <TouchableOpacity
              style={styles.buttonContainer}
            >
                <Icon name={'ios-chatbubbles-outline'} style={styles.icon} />
            </TouchableOpacity>
        );
    }

    get rt () {
        return (
            <TouchableOpacity
              style={styles.buttonContainer}
            >
                <Icon name={'ios-repeat'} style={styles.icon} />
                <Text style={styles.rtCount}>2</Text>
            </TouchableOpacity>
        );
    }

    get like () {
        return (
            <TouchableOpacity
              style={styles.buttonContainer}
            >
                <Icon name={'ios-heart-outline'} style={styles.icon} />
            </TouchableOpacity>
        );
    }

    get msg () {
        return (
            <TouchableOpacity
              style={styles.buttonContainer}
            >
                <Icon name={'ios-mail-outline'} style={styles.icon} />
            </TouchableOpacity>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                { this.comment }
                { this.rt }
                { this.like }
                { this.msg }
            </View>
        );
    }
}
