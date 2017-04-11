import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import App from './src/App'

export default class Gurbia extends Component {
  render() {
    return(
      <App initialRoute={{id: 'CreatePost'}} />
    )
  }
}

AppRegistry.registerComponent('Gurbia', () => Gurbia)
