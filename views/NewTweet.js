import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import NewTweetBar from '../components/NewTweetBar';
import styles from '../styles/views/NewTweet.style';
import colors from '../styles/colors.style';

export default class NewTweet extends Component {

    constructor (props) {
        super(props);
        this.state = { text: '' };
        this._onChangeText = this._onChangeText.bind(this);
    }

    _onChangeText (text) {
        this.setState({ text });
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={this._onChangeText}
                  underlineColorAndroid={colors.support}
                />
                <NewTweetBar text={this.state.text} />
            </View>
        );
    }
}
