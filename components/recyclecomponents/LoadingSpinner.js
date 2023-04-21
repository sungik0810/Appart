import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SpinnerImage from '../images/SpinnerImage'
export default function LoadingSpinner(){
  return (
    <View style={styles.container}>
        <SpinnerImage style={styles.image}
        source={require('../../assets/spinner.gif')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: "50%",
    right: 0,
    top: "50%",
    bottom: 0,
    marginLeft: -40,
  marginTop: -40
  },
  image :{
    width: 80,
    height: 80,
  }
});