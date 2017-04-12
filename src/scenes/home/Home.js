import React, { Component } from 'react'
import {
  View,
  Text,
  BackAndroid
} from 'react-native'
import Drawer from 'react-native-drawer'

import Sidebar from './../../components/Sidebar/Sidebar'
import Navbar from './../../components/Navbar/Navbar'
import Button from './../../components/Button/Button'

export default class Home extends Component {
  constructor( props ) {
    super( props )
  }

  render() {
    closeDrawer = () => {
      this._drawer.close()
    };
    openDrawer = () => {
      this._drawer.open()
    };
    return (
      <Drawer
        type='overlay'
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        openDrawerOffset={0.3}
        content={<Sidebar navigator={this.props.navigator}/>}
        >
        <View>
          <Navbar />
          <Text> BODY HOME COMPONENT </Text>
          <Button onpress={() => openDrawer()} text='OPEN DRAWER' />
        </View>
      </Drawer>
    )
  }
}

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});