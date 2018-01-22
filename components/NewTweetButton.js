import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { pushRoute } from '../routes/navigator';
import styles from '../styles/components/NewTweetButton.style';
import Icon from 'react-native-vector-icons/Ionicons';

export default class NewTweetButton extends Component {

    constructor (props) {
        super(props);
        this._navigate = this._navigate.bind(this);
    }

    _navigate () {
        pushRoute(
            this.props.navigation,
            {
                routeName: 'NewTweet'
            }
        );
    }

    render () {
        return (
            <TouchableOpacity
              style={styles.container}
              onPress={this._navigate}
            >
                <Icon name={'md-create'} style={styles.icon} />
            </TouchableOpacity>
        );
    }
}
