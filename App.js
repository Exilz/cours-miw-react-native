import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import SideMenu from './components/SideMenu';
import Navigator from './routes/index';
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
