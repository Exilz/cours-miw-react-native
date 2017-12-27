import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/components/TabBarButton.style';

export default class TabBarButton extends Component {

    static propTypes = {
        icon: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    }

    render () {
        const { active, icon } = this.props;
        const iconStyle = [styles.icon, active ? styles.activeIcon : {}];

        return (
            <View style={styles.container}>
                <Icon name={this.props.icon} style={iconStyle} />
            </View>
        );
    }
}
