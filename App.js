import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import TabBarButton from './components/TabBarButton';
import Timeline from './components/Timeline';
import Search from './components/Search';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import styles from './styles/app.style';
import colors from './styles/colors.style';

// Entrées de la barre de navigation en bas de l'appli.
// On boucle dessus pour rendre chaque bouton.
const TABS = [
    {
        icon: 'ios-home',
        component: Timeline
    },
    {
        icon: 'ios-search',
        component: Search
    },
    {
        icon: 'ios-notifications',
        component: Notifications
    },
    {
        icon: 'ios-mail',
        component: Messages
    }
];

export default class App extends Component {

    constructor (props) {
        super(props);
        // Par défaut, le bouton actif est le premier (index 0)
        this.state = { activeTab: 0 };
    }

    _onPressTabButton (index) {
        // On crée une fonction qu'on passe en prop (onPress) à TabBarButton.
        // Lors de l'appui, on va changer le bouton actif dans le state pour y
        // mettre l'index du bouton qui vient d'être appuyé.
        return () => {
            this.setState({ activeTab: index });
        }
    }

    get tabBar () {
        // On boucle sur les boutons définis en haut du fichier et
        // on rend le composant TabBarButton pour chaque itération.
        // La prop active est à true lorsque l'index actuel de la boucle
        // correspond au bouton actuellement actif stocké dans le state.
        const buttons = TABS.map((tab, index) => {
            return (
                <TabBarButton
                  key={`tab-button-${index}`}
                  active={index === this.state.activeTab}
                  icon={tab.icon}
                  onPress={this._onPressTabButton(index)}
                />
            );
        });
        return (
            <View style={styles.tabBarContainer}>
                { buttons }
            </View>
        );
    }

    render() {
        // On récupère le composant qui doit être rendu en fonction
        // du bouton actuellement actif dans la barre de navigation.
        const ActiveComponent = TABS[this.state.activeTab].component;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.darkBackground} />
                <View style={styles.contentContainer}>
                    {/* On peut ensuite le rendre de cette manière,
                        comme un composant "normal" */}
                    <ActiveComponent />
                </View>
                { this.tabBar }
            </View>
        );
    }
}
