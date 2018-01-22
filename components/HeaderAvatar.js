import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from '../styles/components/HeaderAvatar.style';

export default class HeaderAvatar extends Component {
    render () {
        return (
            <Image
              source={{ uri: 'https://placeimg.com/75/75/animals' }}
              style={styles.avatar}
            />
        );
    }
}