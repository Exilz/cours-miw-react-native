import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Tweet from './Tweet';
import styles from '../styles/components/Timeline.style';

export default class Timeline extends Component {

    constructor (props) {
        super(props);
        // État du state par défaut.
        // "status" correspond à l'état actuel du chargement des tweets.
        // 1 : chargement en cours (état initial), on affiche un loader
        // 2 : chargement ok, on affiche les tweets
        // 3 : chargement échoué, on affiche un message d'erreur 
        this.state = { status: 1, tweets: [] };
    }

    componentDidMount () {
        // Cette méthode fait partie du cycle de vie de tous les composants React.
        // On s'en sert pour lancer la récupération des tweets en ligne lorsque
        // Timeline a été monté.
        this.fetchTweets();
    }

    async fetchTweets () {
        // Cette méthode asynchone (équivalente à une promesse) récupère les données
        // des tweets depuis un fichier JSON. Elle est encadrée par un try/catch afin
        // de passer le composant au statut 3 si jamais la requête réseau échoue.
        try {
            let tweets = await fetch('http://static.les2cm.eu/miw/timeline.json');
            tweets = await tweets.json();
            // On récupère les données et on les parse en objet javascript.
            // Leur contenu est envoyé dans le state et on passe au statut 2,
            // qui correspond à une requête effectuée avec succès?
            this.setState({ status: 2, tweets });
        } catch (err) {
            // La requête réseau a échoué, on passe le statut en 3 afin d'afficher
            // le message d'erreur
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
        // On ne rend ceci que lorsque le statut du composant est à 2.
        // On boucle sur les tweets récupérés et placés dans le state, puis
        // on rend un composant Tweet par entrée.
        const items = tweets && tweets.length ? tweets.map((tweet, index) => {
            return (
                <Tweet {...tweet} key={`timeline-tweet-${index}`} />
            );
        }) : false;

        // Ces tweets sont rendus au sein d'une ScrollView.
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
