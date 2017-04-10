import React, { Component } from 'react'
import {
  View,
  Text,
  BackAndroid
} from 'react-native'

export default class Home extends Component {
  constructor( props ) {
    super( props )
  }

  render() {
    return(
      <View>
        <Text> HOME COMPONENT </Text>
      </View>
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