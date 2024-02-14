import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('screen');

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Image source={require('../images/assupallogo.png')}
          style={styles.logo} />
        <TouchableOpacity>
          <Image source={require('../images/hamburger.png')}
            style={{ width: width * 0.08, height: width * 0.08, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.hr}></View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: width * 0.5,
    resizeMode: 'contain'
  },
  hr: {
    borderColor: '#ddd',
    borderWidth: 1
  },
})