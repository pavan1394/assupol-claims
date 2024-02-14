import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Dot = ({
  color
}) => {
  return (
    <View style={[
      styles.dot,
      {
        backgroundColor: color ? color : '#000'
      }
    ]}>

    </View>
  )
}

export default Dot

const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
  }
})