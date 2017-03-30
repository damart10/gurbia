import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class Button extends Component {
  constructor( props ) {
    super( props )
  }

  render() {
    return(
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.7}
        onPress={this.props.onpress}>

        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: '#e74c3c',
    height: 40,
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '600'
  }
})