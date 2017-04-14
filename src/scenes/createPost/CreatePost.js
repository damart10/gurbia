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
    this.state = {imagePath: ''}
  }


  componentWillMount(){
    this.setState({imagePath: 'http://thugify.com/wp-content/uploads/2016/08/placeholder.jpg'})
  }
  navigate(id) {
    this.props.navigator.push({ id });
  }

  handleFormSubmit() {
  try {
      if(this.state.imagePath != 'http://thugify.com/wp-content/uploads/2016/08/placeholder.jpg'){
        Database.writePost(
          this.state.imagePath,
          this.state.title,
          this.state.description,
          this.state.location,
          this.state.portions,
          this.state.price
        );
        this.navigate('Home')
        console.log('Holi');
      }
      else{
        alert('Por favor adjunte una imagen')
      }

    } catch(error) {
      console.log('Error: ', error);
    }
  }

  openImage(){
      ImagePicker.openPicker({
        width: 200,
        height: 200,
        cropping: true
        }).then(image => {
        console.log(image.path);

        this.setState({ imagePath: image.path })
      }).catch(function (e) {
        console.log('El usuario no eligio foto',e)
      });
    }

    validateField(field){
      if(field.length > 0){return true}
      else{return false}
    }


  render() {
    return(
      <View style={styles.formContainer}>
        <Image source={{uri:this.state.imagePath}} style={styles.uploadAvatar}/>
        <InputText
          onchange={(title) => this.setState({ title })}
          type='default'
          placeholder='TITLE'
          secure={false}
        />
        <TextInput
          onChangeText={(description) => this.setState({ description })}
          type='default'
          placeholder='DESCRIPTION'
          multiline={true}
          maxLength={140}
          numberOfLines = {5}
          placeholderTextColor="rgba(117, 117, 117, 0.8)"
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
        <Button onpress={() => this.openImage()} text='UPLOAD IMAGE' />
        <Button onpress={() => this.handleFormSubmit()} text='SUBMIT' />
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
  },
  uploadAvatar:{
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginBottom: 30

  }
})
