import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import Database from '../../database/database'

export default class Profile extends Component {
  constructor(props) {
        super(props)
        this.navigate = this.navigate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

render() {
    const user = Database.getUser();
    return(
            <View style={styles.fromContainer}>
              <Text />
              <Image 
                source={{uri: user.photoURL}}
                style={style.image}
              />
            </View>
        )
    }
}