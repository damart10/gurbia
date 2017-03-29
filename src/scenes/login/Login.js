import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import Button from '../../components/Button/Button'
import InputText from '../../components/InputText/InputText'

export default class Login extends Component {
  constructor( props ) {
    super( props)

    this.navigate = this.navigate.bind(this);
  }

  navigate( id ) {
    this.props.navigator.push({ id });
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <InputText type='default' placeholder='USERNAME' secure={false} />
        <InputText type='default' placeholder='PASSWORD' secure={true} />
        <Button func={() => this.navigate('Home')} text='LOGIN' />
        <Button func={() => this.navigate('Register')} text='REGISTER' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 40,
    backgroundColor: '#fff'
  }
})