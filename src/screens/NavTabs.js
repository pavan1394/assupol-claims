import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';

const { width, height } = Dimensions.get('screen');
const navTabs = [
  {
    tab: 'CALL ME',
    logo: require('../images/call-me.png')
  },
  {
    tab: 'BUY ONLINE',
    logo: require('../images/online-buy.png')
  },
  {
    tab: 'LOG IN',
    logo: require('../images/login-user.png')
  },
];

const NavTabs = ({ data }) => {
  return (
    <ScrollView horizontal>
      {navTabs.map((tab, i) => {
        return (
          <View key={i} style={styles.navConatiner}>
            <ImageBackground source={require('../images/nav-bubble.png')} style={styles.bubble}>
              <Image source={tab.logo} style={{ resizeMode: 'center' }} />
            </ImageBackground>
            <View style={styles.tabContainer}>
              <Text style={styles.navText}>{tab?.tab || ''}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default NavTabs

const styles = StyleSheet.create({
  navConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  tabContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#00338D',
    borderRadius: 20,
    marginLeft: 5,
    // alignItems: 'center',
  },
  navText: {
    fontFamily: 'Gordita-Medium',
    color: '#fff',
    fontSize: 10,
  },
  bubble: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
})