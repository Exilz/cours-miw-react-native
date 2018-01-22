import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/components/SideMenu.style';

export default class SideMenu extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'https://placeimg.com/75/75/animals' }} style={styles.avatar} />
                <Text style={styles.username}>Utilisateur</Text>
                <Text style={styles.smallText}>@pseudo</Text>

                <View style={styles.subscribersContainer}>
                    <Text style={styles.smallText}>
                        <Text style={styles.strongText}>364</Text> Abonnements
                        <Text style={styles.strongText}> 166</Text> Abonnés
                    </Text>
                </View>

                {/*
                    TP : terminer l'intégration du reste du menu,
                    cf : https://imgur.com/a/iSWiO
                */}
            </View>
        );
    }
}
