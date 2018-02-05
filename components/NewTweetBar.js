import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/components/NewTweetBar.style';

export default class NewTweetBar extends Component {

    get tweetButton () {
        const isActive = this.props.text.length > 0;
        return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={isActive ? this.props.sendTweet : undefined}
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

    get cameraButton () {
        return (
            <TouchableOpacity
              onPress={this.props.toggleCamera}
              style={styles.smallButton}
            >
                <Icon name={'md-camera'} style={styles.smallButtonIcon} />
            </TouchableOpacity>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                { this.cameraButton }
                { this.charsCounter }
                { this.tweetButton }
            </View>
        );
    }
}
