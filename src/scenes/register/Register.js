import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import InputText from '../../components/InputText/InputText'
import Button from '../../components/Button/Button'

export default class Register extends Component {
  constructor( props ) {
    super( props )
  }

  navigate( id ) {
    this.props.navigator.push({ id });
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <InputText type='default' placeholder='FIRST NAME' secure={false} />
        <InputText type='default' placeholder='LAST NAME' secure={false} />
        <InputText type='default' placeholder='USERNAME' secure={false} />
        <InputText type='default' placeholder='PASSWORD' secure={true} />
        <InputText type='default' placeholder='EMAIL' secure={false} />
        <Button func={() => this.navigate('Home')} text='REGISTER' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
    backgroundColor: '#fff'
  }
})