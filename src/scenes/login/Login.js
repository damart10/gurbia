import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import Database from '../../database/database'

import Button from '../../components/Button/Button'
import InputText from '../../components/InputText/InputText'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.navigate = this.navigate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  navigate( id ) {
    this.props.navigator.push({ id });
  }

  handleFormSubmit() {
    try {
      Database.loginUser(this.state.email, this.state.password);
      this.navigate('Home');
    } catch(error) {
      console.log('Error: ', error);
    }
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <Image
          source={require('../../resources/logo.png')}
          style={styles.imagen}
        />
        <InputText
          onchange={(email) => this.setState({ email })}
          type='default'
          placeholder='EMAIL'
          secure={false}
        />
        <InputText
          onchange={(password) => this.setState({ password })}
          type='default'
          placeholder='PASSWORD'
          secure={true}
        />
        <Button onpress={() => this.handleFormSubmit()} text='LOGIN' />
        <Button onpress={() => this.navigate('Register')} text='REGISTER' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imagen: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  formContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 40,
    backgroundColor: '#fff'
  }
})