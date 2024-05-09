import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/index';
import DevelopmentScreen from './screens/DevelopmentScreen';
import PhotosScreen from './screens/PhotosScreen';
import PrivateScreen from './screens/PrivateScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Index = () => {
  return <HomeScreen />
};

const Dev = () => {
  return <DevelopmentScreen />
};

const Photo = () => {
  return <PhotosScreen />
};

const Private = () => {
  return <PrivateScreen />
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Index} />
        <Tab.Screen name="Development" component={Dev} />
        <Tab.Screen name="Photos" component={Photo} />
        <Tab.Screen name="Private" component={Private}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

