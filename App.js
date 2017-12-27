import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import TabBarButton from './components/TabBarButton';
import styles from './styles/app.style';
import colors from './styles/colors.style';

const TABS = [
    {
        icon: 'ios-home',
        component: false
    },
    {
        icon: 'ios-search',
        component: false
    },
    {
        icon: 'ios-notifications',
        component: false
    },
    {
        icon: 'ios-mail',
        component: false
    }
];

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    get tabBar () {
        const buttons = TABS.map((tab, index) => {
            return (
                <TabBarButton
                  key={`tab-button-${index}`}
                  active={index === this.state.activeTab}
                  icon={tab.icon}
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
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.darkBackground} />
                <View style={styles.listContainer} />
                { this.tabBar }
            </View>
        );
    }
}
