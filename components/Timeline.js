import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Tweet from './Tweet';

export default class Timeline extends Component {

    render () {
        return (
            <ScrollView>
                <Tweet />                
            </ScrollView>
        );
    }
}
