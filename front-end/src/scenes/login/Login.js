import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '../../components/Button/Button'
import InputText from '../../components/InputText/InputText'

import { Actions } from '../../actions'

class Login extends Component {
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
      console.log(this.state);
      this.props.userLogin(this.state.email, this.state.password);
    } catch(error) {
      console.log('Error', error);
    }
  }

  componentWillMount() {
    if(this.props.fetchingState) {
      this.props.navigator.push({ id: 'Home' });
    }
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <Image
          source={require('../../resources/rsz_logo_-_copy.png')}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps(state) {
  return {
    fetchingState: state.user.fetched
  }
}

export default connect(mapStateToProps)(Login)

export default connect(mapStateToProps, mapDispatchToProps)(Login);