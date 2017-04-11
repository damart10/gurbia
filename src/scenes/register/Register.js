import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import Database from '../../database/database'

import InputText from '../../components/InputText/InputText'
import Button from '../../components/Button/Button'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.navigate = this.navigate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  navigate( id ) {
    this.props.navigator.push({ id });
  }

  handleFormSubmit() {
    try {
      Database.createUser(
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.password
      );
      this.navigate('Home');
    } catch(error) {
      console.log('Error: ', error);
    }
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <InputText
          onchange = {(firstname) => this.setState({ firstname })}
          type='default'
          placeholder='FIRSTNAME'
          secure={false}
          />
        <InputText
          onchange = {(lastname) => this.setState({ lastname })}
          type='default'
          placeholder='LASTNAME'
          secure={false}
          />
        <InputText
          onchange = {(email) => this.setState({ email })}
          type='default'
          placeholder='EMAIL'
          secure={false}
          />
        <InputText
          onchange = {(password) => this.setState({ password })}
          type='default'
          placeholder='PASSWORD'
          secure={true}
          />
        <Button func={() => this.navigate('Home')} text='REGISTER' />
      </View>
    )
  }
}1

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
    backgroundColor: '#fff'
  }
})

