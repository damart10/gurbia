import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Navbar from './../../components/Navbar/Navbar'

export default class PostView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Navbar
          onpressnav={() => _navigator.pop()}
          type=''
        />
      </View>
    )
  }
}
