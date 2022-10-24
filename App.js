import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/store';

import HomeScreen from './src/screens/stackScreens/HomeScreen';
import GamePage3x3 from './src/screens/stackScreens/GamePage3x3';
import FirstTabScreen from './src/screens/tabScreens/firstTabScreen';
import GamePage4x4 from './src/screens/stackScreens/GamePage4x4';
import GamePage5x5 from './src/screens/stackScreens/GamePage5x5';

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="firstTabPage" component={FirstTabScreen} />
    </Tab.Navigator>
  )
}



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HomeScreen}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GamePage3x3} options={{ title: 'Tic Tac Toe' }} />
          <Stack.Screen name="TabStackScreen" component={TabHome} />
          <Stack.Screen name="Game4" component={GamePage4x4} options={{ title: 'Tic Tac Toe' }}/>
          <Stack.Screen name="Game5" component={GamePage5x5} options={{ title: 'Tic Tac Toe' }}/>

        </Stack.Navigator>
      </NavigationContainer>


    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
