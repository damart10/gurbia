import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  BackAndroid,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Drawer from 'react-native-drawer'

import Sidebar from './../../components/Sidebar/Sidebar'
import Navbar from './../../components/Navbar/Navbar'
import Post from './../../components/Post/Post'

const data = [
  {
    foodName: 'Comida rica',
    userName: 'El viejo pere',
    description: 'Bacon ipsum dolor amet biltong prosciutto drumstick, fatback t-bone bacon short ribs sausage tail chuck capicola rump. Tri-tip porchetta t-bone rump. Beef ribs shankle pork loin meatball turkey. ',
    key: 1
  },
  {
    foodName: 'Comida más rica',
    userName: 'La tía Diana',
    description: 'Bacon ipsum dolor amet biltong prosciutto drumstick, fatback t-bone bacon short ribs sausage tail chuck capicola rump. Tri-tip porchetta t-bone rump. Beef ribs shankle pork loin meatball turkey. ',
    key: 2
  }
]

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    closeDrawer = () => {
      this._drawer.close()
    };
    openDrawer = () => {
      this._drawer.open()
    };
    const posts = data.map( data => {
      return (
        <Post
          info={{ ...data }}
          key={data.key}
          navigator={this.props.navigator}
        />
      )});
    return (
      <Drawer
        type='overlay'
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        openDrawerOffset={0.3}
        content={<Sidebar navigator={this.props.navigator}/>}
        >
        <View style={styles.container}>
          <Navbar
            onpressnav={() => openDrawer()}
          />
          <ScrollView style={styles.postsList}>
            {posts}
          </ScrollView>
        </View>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  postsList: {
    padding: 5,
    backgroundColor: '#DDDDDD'
  }
})

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});
