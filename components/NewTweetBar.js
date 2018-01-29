import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/NewTweetBar.style';

export default class NewTweetBar extends Component {

    get tweetButton () {
        const isActive = this.props.text.length > 0;
        return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                  styles.button,
                  isActive ? styles.activeButton : {}
              ]}
            >
              <Text style={[
                  styles.buttonLabel,
                  isActive ? styles.buttonLabelActive : {}
               ]}>Tweeter</Text>
            </TouchableOpacity>
        );
    }

    get charsCounter () {
        return (
            <Text style={styles.chars}>
                { this.props.text.length }
            </Text>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                { this.charsCounter }
                { this.tweetButton }
            </View>
        );
    }
}
