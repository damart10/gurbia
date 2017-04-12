import React, { Component } from 'react'
import {
  ToolbarAndroid,
  StyleSheet
} from 'react-native'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ToolbarAndroid
        style={styles.bar}
        navIcon={require('./../../resources/ic_menu_white_24dp_1x.png')}
      >

      </ToolbarAndroid>
    )
  }
}

const styles = StyleSheet.create({
  bar:{
    height: 35,
    backgroundColor: '#e74c3c'
  }
})