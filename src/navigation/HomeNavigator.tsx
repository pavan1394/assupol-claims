import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import { View } from 'react-native';
import Header from '../screens/Header';

export type HomeStackParamList = {
  Home: undefined;
  Upcoming: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: props => <Header />,
        // header: props => <NavBar {...props} />,
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
