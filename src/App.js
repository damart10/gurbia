import React, { Component } from 'react'
import {
  Navigator,
  Text
} from 'react-native'
import * as firebase from 'firebase'

import Login from './scenes/login/Login'
import Register from './scenes/register/Register'
import Home from './scenes/home/Home'
import CreatePost from './scenes/createPost/CreatePost'
import Profile from './scenes/profile/Profile'
import PostView from './scenes/postView/PostView'
import UserPost from './scenes/UserPost/UserPost'
import Orders from './scenes/Orders/Orders'
import ViewSubscriptions from './scenes/ViewSubscriptions/ViewSubscriptions'
import UpdateProfile from './scenes/updateProfile/UpdateProfile'
import Recommendations from './scenes/recommendations/Recommendations'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.renderScene = this.renderScene.bind(this);

    var config = {
      apiKey: "AIzaSyCVSx_RrH9Dq9ZW91d2IOe9vZgkbRD3Uc4",
      authDomain: "gurbia-79ddc.firebaseapp.com",
      databaseURL: "https://gurbia-79ddc.firebaseio.com",
      storageBucket: "gurbia-79ddc.appspot.com",
    };

    firebase.initializeApp(config);
  }

  renderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Login':
        return (<Login navigator={_navigator} />);
      case 'Register':
        return (<Register navigator={_navigator} />);
      case 'Home':
        return (<Home navigator={_navigator} />);
      case 'CreatePost':
        return (<CreatePost navigator={_navigator} />);
      case 'Profile':
        return (<Profile navigator={_navigator} />);
      case 'UserPost':
        return (<UserPost navigator={_navigator} />);
      case 'Orders':
        return (<Orders navigator={_navigator} data={route.data} />);
      case 'PostView':
        return (<PostView navigator={_navigator} data={route.data} />);
      case 'ViewSubscriptions':
        return (<ViewSubscriptions navigator={_navigator} data={route.data} />);
      case 'UpdateProfile':
        return (<UpdateProfile navigator={_navigator} />);
      case 'Recommendations':
        return (<Recommendations navigator={_navigator} />);
      default:
        return (<Text>SOMETHING WENT WRONG ${route}</Text>);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
      />
    )
  }
}
