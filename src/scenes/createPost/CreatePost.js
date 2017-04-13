import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput
} from 'react-native'
import Database from '../../database/database'
import Button from '../../components/Button/Button'
import InputText from '../../components/InputText/InputText'
import ImagePicker from 'react-native-image-crop-picker'


export default class CreatePost extends Component {
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
      console.log('Holi');
    } catch(error) {
      console.log('Error: ', error);
    }
  }
  abrir(){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
      }).then(image => {
      console.log(image);
    });
  }



  render() {
    return(
      <View style={styles.formContainer}>
        <InputText
          onchange={(title) => this.setState({ title })}
          type='default'
          placeholder='TITLE'
          secure={false}
        />
        <TextInput
          onchange={(description) => this.setState({ description })}
          type='default'
          placeholder='DESCRIPTION'
          multiline={true}
          maxLength={140}
          numberOfLines = {5}
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
        />
        <InputText
          onchange={(location) => this.setState({ location })}
          type='default'
          placeholder='LOCATION'
          secure={false}
        />
        <View>
          <InputText
            onchange={(portions) => this.setState({ portions })}
            type='default'
            placeholder='PORTIONS'
            secure={false}
          />
          <InputText
            onchange={(price) => this.setState({ price })}
            type='default'
            placeholder='PRICE'
            secure={false}
          />
        </View>
        <Button onpress={() => this.handleFormSubmit()} text='SUBMIT' />
        <Button onpress={() => this.abrir()} text='Adjuntar imagen' />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  formContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 40,
    backgroundColor: '#fff'
  }
})
