import React, { Component } from 'react'
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'

export default class InputText extends Component {
  constructor( props ) {
    super( props )
  }

  render() {
    return(
      <KeyboardAvoidingView behavior='padding'>
            <TextInput
              keyboardType={this.props.type}
              autoCorrect={false}
              placeholder={this.props.placeholder}
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              selectionColor="#FFE082"
              underlineColorAndroid="#e67e22"
              secureTextEntry={this.props.secure}
              style={styles.inputStyle}
              onChange={this.props.onchange}
            />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    color: "#000",
    backgroundColor: '#FFF',
    marginBottom: 10
  }
})