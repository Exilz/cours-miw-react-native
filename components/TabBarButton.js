import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/components/TabBarButton.style';

export default class TabBarButton extends Component {

    static propTypes = {
        icon: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired
    }

    render () {
        const { active, icon, onPress } = this.props;
        const iconStyle = [styles.icon, active ? styles.activeIcon : {}];

        return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.container}
              onPress={onPress}
            >
                <Icon name={this.props.icon} style={iconStyle} />
            </TouchableOpacity>
        );
    }
}
