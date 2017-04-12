import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Drawer from 'react-native-drawer'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  navigate( id ) {
    this.props.navigator.push({ id });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>BODY DRAWER</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    borderRightWidth: 1,
    backgroundColor: '#fff'
  }
})