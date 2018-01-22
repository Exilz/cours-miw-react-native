import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import SideMenu from './components/SideMenu';
import Navigator from './routes/index';

// Le point d'entrée de l'application.
// À cette étape, on ne rend plus que le menu latéral ainsi que la vue
// active qui est gérée par le navigateur.

export default class App extends Component {
    render () {
        return (
            <Drawer
              type={'displace'}
              panOpenMask={0.1}
              openDrawerOffset={0.2}
              tapToClose={true}
              content={<SideMenu />}
              negotiatePan={true}
              panCloseMask={0.2}
            >
                <Navigator />
            </Drawer>
        );
    }
}
