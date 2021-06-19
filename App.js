import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/FacebookScreen';
import Instagram from './screens/InstagramScreens';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default function App() {
  return (
    <View style={styles.container}>
     < AppContainer></AppContainer>
          </View>
  );
}
var AppTabNavigator=createBottomTabNavigator({


Facebook:{screen:Facebook},
 Search:{screen:Instagram}
})
const AppContainer=createAppContainer(AppTabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
