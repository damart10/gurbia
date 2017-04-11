import React, { Component } from 'react'
import {
  Navigator,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from './scenes/login/Login'
import Register from './scenes/register/Register'
import Home from './scenes/home/Home'

import { Actions } from './actions'

class App extends Component {
  constructor( props ) {
    super( props )

    this.renderScene = this.renderScene.bind(this);
  }

  componentWillMount() {
    if(this.props.fetchingState === true) {
      this.props.initialRoute = {id : 'Home'}
    }
  }

  renderScene( route, navigator ) {
    _navigator = navigator;
    switch( route.id ) {
      case 'Login':
        return( <Login navigator={_navigator} {...this.props}/>);
        break;
      case 'Register':
        return( <Register navigator={_navigator} {...this.props}/>);
        break;
      case 'Home':
        return( <Home navigator={_navigator} {...this.props}/>);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps(state) {
  return {
    fetchingState: state.user.fetched
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);