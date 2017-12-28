import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Tweet from './Tweet';
import styles from '../styles/components/Timeline.style';

export default class Timeline extends Component {

    constructor (props) {
        super(props);
        this.state = { status: 1, tweets: [] };
    }

    componentDidMount () {
        this.fetchTweets();
    }

    async fetchTweets () {
        try {
            let tweets = await fetch('http://static.les2cm.eu/miw/timeline.json');
            tweets = await tweets.json();
            console.info('tweets', tweets);
            this.setState({ status: 2, tweets });
        } catch (err) {
            console.warn('Erreur lors de la récuparation de la timeline', err);
            this.setState({ status: 3 });
        }
    }

    get loading () {
        return (
            <View style={styles.labelContainer}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }

    get error () {
        return (
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Errerur lors du chargement des tweeets...</Text>
            </View>
        );
    }

    get timeline () {
        const { tweets } = this.state;
        const items = tweets && tweets.length ? tweets.map((tweet, index) => {
            return (
                <Tweet {...tweet} key={`timeline-tweet-${index}`} />
            );
        }) : false;

        return (
            <ScrollView>
                { items }
            </ScrollView>
        );
    }

    get content () {
        switch (this.state.status) {
        case 1: return this.loading;
        case 2: return this.timeline;
        case 3: return this.error;
        }
    }

    render () {
        return (
            <View style={styles.container}>
                { this.content }
            </View>
        );
    }
}
