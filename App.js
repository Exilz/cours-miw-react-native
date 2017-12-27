import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import TabBarButton from './components/TabBarButton';
import Timeline from './components/Timeline';
import Search from './components/Search';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import styles from './styles/app.style';
import colors from './styles/colors.style';

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
        this.state = { activeTab: 0 };
    }

    _onPressTabButton (index) {
        return () => {
            this.setState({ activeTab: index });
        }
    }

    get tabBar () {
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
        const ActiveComponent = TABS[this.state.activeTab].component;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.darkBackground} />
                <View style={styles.contentContainer}>
                    <ActiveComponent />
                </View>
                { this.tabBar }
            </View>
        );
    }
}
