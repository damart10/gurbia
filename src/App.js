import React, { Component } from 'react'
import {
  Navigator,
  Text
} from 'react-native'
import { connect } from 'react-redux'

import Login from './scenes/login/Login'
import Register from './scenes/register/Register'
import Home from './scenes/home/Home'

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.renderScene = this.renderScene.bind(this);

    if(this.props.userFetched === true) {
      this.props.initialRoute = {id : 'Home'}
    }
  }

  renderScene( route, navigator ) {
    _navigator = navigator;
    switch( route.id ) {
      case 'Login':
        return( <Login navigator={_navigator} />);
        break;
      case 'Register':
        return( <Register navigator={_navigator} />);
        break;
      case 'Home':
        return( <Home navigator={_navigator} />);
        break;
      default:
        return ( <Text>SOMETHING WENT WRONG ${route}</Text> );
    }
  }

  render() {
    return(
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
      />
    )
  }
}

connect( store => ({ userFetched: store.user.fetched }), {})