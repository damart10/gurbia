import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import Button from '../../components/Button/Button'
import InputText from '../../components/InputText/InputText'

import userActions from '../../actions/userActions'

export default class Login extends Component {
  constructor( props ) {
    super( props)

    state = {
      email: '',
      password: ''
    }

    this.navigate = this.navigate.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
  }

  navigate( id ) {
    this.props.navigator.push({ id });
  }

  handleInputEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleInputPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleFormSubmit(e) {
    this.props.userActions.userLogin(this.state.email, this.state.password)
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <InputText
          onchange={() => this.handleInputEmail()}
          type='default'
          placeholder='EMAIL'
          secure={false}
        />
        <InputText
          onchange={() => this.handleInputPassword()}
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
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 40,
    backgroundColor: '#fff'
  }
})

connect( {}, { userActions })(Login)