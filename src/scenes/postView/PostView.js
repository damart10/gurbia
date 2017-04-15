import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import StarRating from 'react-native-star-rating'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Navbar from './../../components/Navbar/Navbar'

export default class PostView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      starCount: 3.5
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Navbar
          onpressnav={() => _navigator.pop()}
          type=''
        />
        <View style={styles.imageContainer}>
          <Image
            source={{uri:this.props.data.picture}}
            style={styles.postImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.principalInfoContainer}>
            <View>
              <Text style={styles.foodNameText}>{this.props.data.title}</Text>
              <Text style={styles.usernameText}>{this.props.data.authorName}</Text>
            </View>
            <View style={styles.rateContainer}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={this.state.starCount}
                starColor={'#D32F2F'}
                emptyStarColor={'#f2828a'}
                starSize= {30}
              />
            </View>
          </View>
          <View style={styles.foodInfoContainer}>
            <View style={styles.pricingContainer}>
              <Text style={styles.priceText}>
                <Text style={{fontWeight: 'bold'}}>Price:</Text> {this.props.data.price}
              </Text>
              <Text style={styles.priceText}>
                <Text style={{fontWeight: 'bold'}}>Portions:</Text> {this.props.data.portions}</Text>
            </View>
            <Text style={styles.foodDescription}>
              {this.props.data.description}
            </Text>
          </View>
        </View>
        <ActionButton
          buttonColor='rgba(255, 87, 34, 1)'
          onPress={() => alert('Que lindo pedido hiciste')}
          icon={
            <Icon name='keyboard-arrow-right' size={32} color='#FFFFFF' />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  imageContainer: {
    backgroundColor: '#CDCDCD',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  postImage: {
    height: 300,
    width: 250,
  },
  infoContainer: {
    padding: 10,
  },
  principalInfoContainer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  foodNameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 16,
    fontStyle: 'italic'
  },
  rateContainer:{
    alignSelf: 'center'
  },
  foodInfoContainer: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  foodDescription: {
    fontSize: 15,
    fontWeight: 'normal'
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5
  },
  priceText:{
    fontSize: 15,
  },
})
