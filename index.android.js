import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import App from './src/App'

export default class Gurbia extends Component {
  render() {
    return(
      <App initialRoute={{id: 'Home'}} />
    )
  }
}

AppRegistry.registerComponent('Gurbia', () => Gurbia)
