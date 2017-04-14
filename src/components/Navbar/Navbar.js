import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.navContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={this.props.onpressnav}
          >
            <Image
              source={require('./../../resources/menu.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={this.props.onpressserach}
          >
            <Image
              source={require('./../../resources/search.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#F44336'
  },
  buttonContainer: {
    padding: 2,
    height: 38,
    width: 38
  },
  button: {
    height: 35,
    width: 35
  },
  icon: {
    height: 32,
    width: 32
  }
})
