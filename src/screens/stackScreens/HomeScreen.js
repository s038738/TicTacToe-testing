import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { Stack, Switch, Button } from "@react-native-material/core";

function HomeScreen({ navigation }) {
  const [player, setPlayer] = useState('X')

  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };


  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{ fontSize: '50px', fontFamily: 'Gill Sans' }}
        >Tic tac toe</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>

        <View style={styles.item}>
          <View style={{ width: '60%', marginLeft: "20%" }}>
            <Button
              style={{ backgroundColor: isActive ? 'blue' : 'grey' }}
              title="X starts"
              onPress={() => { setPlayer('X'); handleClick(); handleClick2(); }} />
          </View>
        </View>

        <View style={styles.item}>
          <View style={{ width: '60%', marginLeft: "20%" }}>
            <Button
              style={{ backgroundColor: isActive2 ? 'blue' : 'grey' }}
              title="O starts"
              onPress={() => { setPlayer('O'); handleClick2(); handleClick(); }} />
          </View>
        </View>
      </SafeAreaView>

      <SafeAreaView style={{ flex: 0.5, }}>
        <Button
        testID='5x5'
          style={styles.button}
          title='5x5 Board'
          onPress={() => navigation.push('Game5', player)} />

        <Button
        testID='4x4'
          style={styles.button}
          title='4x4 Board'
          onPress={() => navigation.push('Game4', player)} />

        <Button
        testID='3x3'
          style={styles.button}
          title="3x3 Board"
          onPress={() => navigation.push('Game', player)} />
      </SafeAreaView>

    </>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width

  },
  button:
  {
    marginLeft: '25%',
    marginTop: -100,
    width: '50%',

  }
})


export default HomeScreen;